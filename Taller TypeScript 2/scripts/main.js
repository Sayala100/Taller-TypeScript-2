import { series } from "./Data.js";
var bodyS = document.getElementById("series");
var averageSeasons = document.getElementById("seasonAverage");
setCells(series);
averageSeasons.innerHTML = "".concat(getSeasonAverage(series));
function setCells(seriess) {
    console.log("Poniendo las series");
    seriess.forEach(function (serie) {
        var cell = document.createElement("tr");
        cell.innerHTML = "<td class=\"table-light\">".concat(serie.id, "</td>\n                        <td class=\"table-light\">").concat(serie.name, "</td>\n                        <td class=\"table-light\">").concat(serie.channel, "</td>\n                        <td class=\"table-light\">").concat(serie.seasons, "</td>");
        bodyS.appendChild(cell);
        cell.children[1].classList.add("active");
        cell.children[1].addEventListener("click", function () {
            makeCard(serie, serie.id);
        });
    });
}
function getSeasonAverage(seriess) {
    var average = 0;
    seriess.forEach(function (serie) {
        average += serie.seasons;
    });
    return average / seriess.length;
}
function makeCard(serie, id) {
    var card = document.getElementById("card");
    card.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.resumen, "</p>\n        <a href=\"").concat(serie.website, "\" class=\"btn btn-primary\">Go to website</a>\n    </div>\n    </div>");
}
