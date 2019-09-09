/**
 * Imports from other modules
 */
import {
    toggle
} from './ui.js';

import {
    renderShowsDOM
} from './show.js'

/**
 * Fetch DOM nodes
 */
const navbar = document.querySelector('#navbar');
const closeIcon = document.querySelector('#navbar-close');
const searchIcon = document.querySelector('#navbar-search');
const searchInput = document.querySelector('#search-form .input.search');
const searchButton = document.querySelector('#search-form .button.search');

/**
 * Event handlers
 */
searchIcon.addEventListener('click', () => (
    toggle(navbar, 'no-search', 'search')
));

closeIcon.addEventListener('click', () => (
    toggle(navbar, 'search', 'no-search')
));

searchInput.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        renderShowsDOM(searchInput.value);
    }
});

searchButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    renderShowsDOM(searchInput.value);
});