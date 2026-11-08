/* Graded picks only. Edit this file to update the record on every page. */
(function () {
  var record = [
    { sport: "NBA", wins: 8, losses: 12, units: -3.46 },
    { sport: "NFL", wins: 3, losses: 3, units: -1.69 },
    { sport: "CFB", wins: 5, losses: 8, units: -5.55 }
  ];

  var overall = { wins: 16, losses: 23, units: -10.70, roi: -16.7, staked: 64 };

  function formatUnits(units) {
    var text = units.toFixed(2);
    if (units > 0) return "+" + text;
    if (units === 0) return "+0.00";
    return text;
  }

  function formatRoi(roi) {
    var text = Math.abs(roi).toFixed(1) + "%";
    if (roi > 0) return "+" + text;
    if (roi < 0) return "-" + text;
    return text;
  }

  var line = "Tracker (graded picks): " + record.map(function (row) {
    return row.sport + " " + row.wins + "-" + row.losses + ", " + formatUnits(row.units) + "U";
  }).join(" · ") + " · All sports " + overall.wins + "-" + overall.losses + ", " + formatUnits(overall.units) + "U, ROI " + formatRoi(overall.roi) + ", " + overall.staked + "U staked";

  var nodes = document.querySelectorAll("[data-tracker]");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = line;
  }
})();
