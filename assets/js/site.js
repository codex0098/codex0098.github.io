(function () {
  "use strict";

  /* Theme: system -> light -> dark -> system */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  function readTheme() {
    try { var t = localStorage.getItem("theme"); return t === "light" || t === "dark" ? t : "system"; }
    catch (e) { return root.getAttribute("data-theme") || "system"; }
  }
  function applyTheme(mode) {
    if (mode === "system") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", mode);
    try { if (mode === "system") localStorage.removeItem("theme"); else localStorage.setItem("theme", mode); } catch (e) {}
    if (toggle) {
      toggle.setAttribute("data-mode", mode);
      toggle.setAttribute("aria-label", "Color theme: " + mode + ". Change theme");
      toggle.title = "Theme: " + mode;
    }
  }
  if (toggle) {
    applyTheme(readTheme());
    toggle.addEventListener("click", function () {
      var order = ["system", "light", "dark"];
      var next = order[(order.indexOf(toggle.getAttribute("data-mode") || "system") + 1) % order.length];
      applyTheme(next);
    });
  }

  /* Copy email */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var status = document.getElementById(btn.getAttribute("aria-describedby"));
      function done(msg) { if (status) { status.textContent = msg; setTimeout(function () { status.textContent = ""; }, 2500); } }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done("Copied"); }, function () { done("Select the address to copy"); });
      } else { done("Select the address to copy"); }
    });
  });

  /* Writing filters */
  var filters = document.getElementById("filters");
  if (!filters) return;
  filters.hidden = false;
  var input = document.getElementById("q");
  var chips = Array.prototype.slice.call(filters.querySelectorAll(".chip"));
  var rows = Array.prototype.slice.call(document.querySelectorAll(".page-writing .w-row"));
  var groups = Array.prototype.slice.call(document.querySelectorAll(".year-group"));
  var count = document.getElementById("result-count");
  var empty = document.getElementById("empty");
  var topic = "";

  function update() {
    var q = input.value.trim().toLowerCase();
    var terms = q ? q.split(/\s+/) : [];
    var n = 0;
    rows.forEach(function (row) {
      var topics = (row.getAttribute("data-topics") || "").split("|");
      var hay = row.getAttribute("data-search") || "";
      var ok = (!topic || topics.indexOf(topic) !== -1) && terms.every(function (t) { return hay.indexOf(t) !== -1; });
      row.hidden = !ok;
      if (ok) n++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector(".w-row:not([hidden])"); });
    count.textContent = n === 1 ? "1 piece" : n + " pieces";
    empty.hidden = n !== 0;
  }
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      topic = chip.getAttribute("data-topic");
      chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
      update();
    });
  });
  input.addEventListener("input", update);
  document.getElementById("reset").addEventListener("click", function () {
    input.value = ""; topic = "";
    chips.forEach(function (c, i) { c.setAttribute("aria-pressed", i === 0 ? "true" : "false"); });
    update(); input.focus();
  });
})();
