import { series } from "./data.js";
function renderTable() {
    const tbody = document.getElementById("series-tbody");
    tbody.innerHTML = "";
    let totalSeasons = 0;
    series.forEach((s) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <th scope="row">${s.id}</th>
      <td>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>` : s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        tbody.appendChild(tr);
        totalSeasons += s.seasons;
    });
    const average = series.length ? totalSeasons / series.length : 0;
    const avgContainer = document.getElementById("average-seasons-text");
    avgContainer.textContent = `Seasons average: ${average.toFixed(2)}`;
}
document.addEventListener("DOMContentLoaded", renderTable);
