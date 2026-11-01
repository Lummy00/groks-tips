/* Graded picks only. Edit this file to update the record on every page. */
(function () {
  var record = [
    { sport: "NBA", wins: 3, losses: 3, units: 2.2 },
    { sport: "NFL", wins: 0, losses: 0, units: 0 },
    { sport: "CFB", wins: 2, losses: 3, units: -3.11 }
  ];

  function formatUnits(units) {
    var text = units.toFixed(2);
    if (units > 0) return "+" + text;
    if (units === 0) return "+0.00";
    return text;
  }

  var line = "Tracker (graded picks): " + record.map(function (row) {
    return row.sport + " " + row.wins + "-" + row.losses + ", " + formatUnits(row.units) + "U";
  }).join(" · ");

  var nodes = document.querySelectorAll("[data-tracker]");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = line;
  }
})();
