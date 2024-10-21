// Elementos del DOM
const regionFilter = document.getElementById('regionFilter');
const languageFilter = document.getElementById('languageFilter');
const populationFilter = document.getElementById('populationFilter');
const countryContainer = document.getElementById('countryContainer');

// Variables para almacenar los filtros
let selectedRegion = '';
let selectedLanguage = '';
let selectedPopulation = '';

// Función para obtener los países según los filtros aplicados
async function fetchCountries() {
    let url = 'https://restcountries.com/v3.1/all';
    const response = await fetch(url);
    let countries = await response.json();

    // Filtrar por región
    if (selectedRegion) {
        countries = countries.filter(country => country.region.toLowerCase() === selectedRegion);
    }

    // Filtrar por idioma
    if (selectedLanguage) {
        countries = countries.filter(country => {
            const languages = country.languages ? Object.values(country.languages).map(lang => lang.toLowerCase()) : [];
            return languages.includes(selectedLanguage);
        });
    }

    // Filtrar por población
    if (selectedPopulation) {
        countries = countries.filter(country => {
            if (selectedPopulation === 'small') {
                return country.population < 1000000;
            } else if (selectedPopulation === 'medium') {
                return country.population >= 1000000 && country.population < 10000000;
            } else if (selectedPopulation === 'large') {
                return country.population >= 10000000;
            }
        });
    }

    displayCountries(countries);
}

// Función para renderizar las tarjetas de los países
function displayCountries(countries) {
    countryContainer.innerHTML = '';  // Limpiar el contenedor
    countries.forEach(country => {
        const languages = country.languages ? Object.values(country.languages).join(', ') : 'No disponible';
        const population = country.population.toLocaleString();
        const independence = country.independent ? 'Independiente' : 'No independiente';

        const card = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${country.flags.svg}" class="card-img-top" alt="Bandera de ${country.name.common}">
                    <div class="card-body">
                        <h5 class="card-title">${country.name.common}</h5>
                        <p class="card-text"><strong>Región:</strong> ${country.region}</p>
                        <p class="card-text"><strong>Idioma:</strong> ${languages}</p>
                        <p class="card-text"><strong>Gentilicio:</strong> ${country.demonyms?.eng?.m ?? 'Desconocido'}</p>
                        <p class="card-text"><strong>Población:</strong> ${population}</p>
                        <p class="card-text"><strong>Independencia:</strong> ${independence}</p>
                    </div>
                </div>
            </div>
        `;
        countryContainer.innerHTML += card;
    });
}

// Actualización de los filtros
regionFilter.addEventListener('change', () => {
    selectedRegion = regionFilter.value.toLowerCase();
    fetchCountries();
});

languageFilter.addEventListener('change', () => {
    selectedLanguage = languageFilter.value.toLowerCase();
    fetchCountries();
});

populationFilter.addEventListener('change', () => {
    selectedPopulation = populationFilter.value;
    fetchCountries();
});

// Cargar los países por defecto al iniciar
fetchCountries();
