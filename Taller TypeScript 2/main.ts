import { Serie } from "./Serie.js";
import { series } from "./Data.js";
let bodyS: HTMLElement = document.getElementById("series")!;
const averageSeasons: HTMLElement = document.getElementById("seasonAverage")!;

setCells(series);
averageSeasons.innerHTML = `${getSeasonAverage(series)}`

function setCells(seriess: Serie[]): void {
    console.log("Poniendo las series")
    seriess.forEach(serie => {
        let cell = document.createElement("tr");
        cell.innerHTML = `<td class="table-light">${serie.id}</td>
                        <td class="table-light">${serie.name}</td>
                        <td class="table-light">${serie.channel}</td>
                        <td class="table-light">${serie.seasons}</td>`;
       bodyS.appendChild(cell);

       cell.children[1].classList.add("active");
       cell.children[1].addEventListener("click", () => {
            makeCard(serie, serie.id);
       
        });
    });
}

function getSeasonAverage(seriess: Serie[]): number {
    let average: number = 0;
    seriess.forEach(serie => {
        average += serie.seasons;
    });
    return average / seriess.length;
}

function makeCard(serie: Serie, id: number): void {
    let card: HTMLElement = document.getElementById("card")!;
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${serie.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.resumen}</p>
        <a href="${serie.website}" class="btn btn-primary">Go to website</a>
    </div>
    </div>`;

}


