/**
 * Imports from other modules
 */
import {
    toggle
} from "./ui.js";

const shows = [{
        id: 1001,
        principal: true,
        name: "Game of thrones",
        image: "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
        summary: "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones."
    },
    {
        id: 1002,
        name: "Breaking Bad",
        image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201310/breaking-bad_660_100113084027.jpg",
        summary: "Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show originally aired on AMC for five seasons, from January 20, 2008, to September 29, 2013."
    },
    {
        id: 1003,
        name: "Chernobyl",
        image: "https://www.unilad.co.uk/wp-content/uploads/2019/05/Chernobyl-1.jpg",
        summary: "Chernobyl is a historical drama television miniseries created and written by Craig Mazin and directed by Johan Renck for HBO. The series centers around the Chernobyl nuclear disaster of April 1986 and the unprecedented cleanup efforts that followed."
    },
    {
        id: 1004,
        name: "Big Little Lies",
        image: "https://www.hbo.com/content/dam/hbodata/series/big-little-lies/key-art/big-little-lies-s2-ka-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg",
        summary: "Based on Liane Moriarty’s bestselling book, and featuring Reese Witherspoon, Nicole Kidman, and Shailene Woodley, this darkly comedic series tells the tale of three mothers whose seemingly perfect lives unravel to the point of murder."
    }
];

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
  <div id=card-${id} class="card ${
  principal ? "principal" : "secondary close"
}">
    <header class="card-header">
      <h2>${name}</h2>
    </header>
    <div class="card-content">
      <div class="card-content-image">
        <img src="${image ? image : "default.jpg"}">
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
 * Rendereiza un nuevo show en el array de shows
 * @param {*} shows Shows visualizados
 * @param {*} new Nuevo show a renderizar
 */
const renderShows = (container, shows) => {
    const htmlShows = shows
        .map((show, index) => {
            return templateShow({
                id: show.id,
                principal: show.principal,
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
    const mainSection = document.querySelector("#show-section");
    renderShows(mainSection, shows);
};

renderShowsDOM();

/**
 * Event handler haciendo uso del event bubbling
 */
const mainSection = document.querySelector("#show-section");

mainSection.addEventListener("click", ev => {
    // Me quedo con la card pinchada
    const show = ev.srcElement.closest(".card.secondary");
    if (show) {
        // Abro el card en el que se ha hecho click
        const toggleShow = toggle(show);
        if (show.classList.contains('close')) {
            toggleShow('close', '');
        } else {
            toggleShow('', 'close');
        }
    }

});

/**
 * Export
 */
export {
    renderShowsDOM
};