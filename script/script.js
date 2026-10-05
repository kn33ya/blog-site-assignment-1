let animeData = [];

fetch("script/anime.json").then(response => response.json()).then(data => {
    animeData = data;
    console.log(animeData);
    populateFilters(animeData);
    makeGrid(animeData);
}) // fetch; making the grid and populating the filters with the data from the json file
.catch(error => console.error("Error fetching anime data:", error));

function populateFilters(data){
    let genreSet = new Set();
    let ratingSet = new Set();
    let yearSet = new Set();

    data.forEach(item => {
       item.Genre.split(",").forEach(genre => genreSet.add(genre.trim()));
       ratingSet.add(item.Rating);
         yearSet.add(item['Year Released']);
    }); //sorting through the data to get the unique values for each filter
    
    fillDropdown("genre-filter", Array.from(genreSet).sort());
    fillDropdown("rating-filter", Array.from(ratingSet).sort());
    fillDropdown("year-filter", Array.from(yearSet).sort());
} //function populateFilters; putting the unique values into the dropdowns

function fillDropdown(id, values){
    let select = document.getElementById(id);
    values.forEach(value => {
        let option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    }); // forEach
} //function fillDropdown; allowing the user to select from the unique values in the dropdowns

function makeGrid(data){
    let grid = document.getElementById("anime-grid");
    grid.innerHTML = ""; // Clear existing content

    data.forEach(item => {
        let col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-3";
        col.innerHTML = `
            <div class="anime-card">
                <h3>${item.Name}</h3>
                <div class ="anime-card-info">
                    <p><strong>Genre:</strong> ${item.Genre}</p>
                    <p><strong>Year Released:</strong> ${item['Year Released']}</p>
                    <p><strong>Rating:</strong> ${item.Rating}</p>
                </div>
            </div>
        `;
        grid.appendChild(col);
    }); //forEach
} //function makeGrid; making the grid of anime cards based on the data provided

function applyFilters(){
    let genre = document.getElementById("genre-filter").value;
    let rating = document.getElementById("rating-filter").value;
    let year = document.getElementById("year-filter").value;

    let filtered = animeData.filter(item => {
        return (genre === "all" || item.Genre.includes(genre)) &&
               (rating === "all" || item.Rating === rating) &&
               (year === "all" || String(item['Year Released']) === year);
    }); //filtered
    makeGrid(filtered); // Update the grid with filtered data
} //function applyFilters; applying the filters to the data and updating the grid accordingly

document.getElementById("genre-filter").addEventListener("change", applyFilters);
document.getElementById("rating-filter").addEventListener("change", applyFilters);
document.getElementById("year-filter").addEventListener("change", applyFilters);