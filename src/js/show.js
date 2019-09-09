/**
 * Imports from other modules
 */
import {
  toggle,
  toggleAfterClick
} from "./ui.js";

/**
 * DOM Objects definition
 */
const mainSection = document.querySelector("#show-section");
const loader = document.querySelector('#loader');

/**
 * Paginator
 */
let currentPage = 0;
const limitPerPage = 5;

/**
 * Cargo los shows de la API
 */
let shows;
fetch('http://api.tvmaze.com/shows')
  .then(response => response.json())
  .then(result => {
    shows = result
    renderShowsDOM('');
  })
  .catch(error => console.log(error))

/**
 * Template string para mostrar un Show
 * @param {String} principal Titulo principal
 * @param {String} name Nombre
 * @param {String} image URL a la imagen
 * @param {String} summary Resumen del show
 */
const templateShow = ({
  id,
  principal,
  name,
  image,
  summary
}) => `
  <div id=${id} class="card ${principal ? "principal" : "secondary close"}">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${image ? image.medium : "default.jpg"}">
      </div>
      <div class="card-content-text">
        <p>${summary}
        </p>
        <div class="rating-container">
          <button class="icon">
            <i class="fas fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
          <button class="icon">
            <i class="far fa-star"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

/**
 * Renderiza un nuevo show en el array de shows
 * @param {*} shows Shows visualizados
 * @param {*} new Nuevo show a renderizar
 */
const renderShows = (container, shows) => {
  const htmlShows = shows
    .map((show, index) => {
      return templateShow({
        id: show.id,
        principal: index <= 1,
        name: show.name,
        image: show.image,
        summary: show.summary
      });
    })
    .join("");
  container.innerHTML = htmlShows;
};

/**
 * Renderiza los resultados que cumplen el filtro indicado
 * @param {String} filter Filtro a aplicar en el API
 */
const renderShowsDOM = filter => {
  try {
    toggle(loader, 'hide', 'show');
    renderShows(mainSection, shows.filter(s => {
      const name = s.name.toLowerCase();
      return name.includes(filter.toLowerCase());
    }).slice(currentPage * limitPerPage, limitPerPage));
  } catch (error) {
    console.log(error);
  } finally {
    toggle(loader, 'show', 'hide');
  }
};

/**
 * Event handler haciendo uso del event bubbling
 */
mainSection.addEventListener("click", ev => {
  // Me quedo con la card pinchada
  const header = ev.srcElement.closest(".card-header");
  if (header) {
    const show = header.parentElement;
    if (!show.classList.contains('principal')) {
      toggleAfterClick(show, 'close');
    }
  }
});

/**
 * Export
 */
export {
  renderShowsDOM
};