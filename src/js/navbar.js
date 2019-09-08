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
 * Function declarations
 */
const toggleNavbar = toggle(navbar);

/**
 * Event handlers
 */
searchIcon.addEventListener('click', () => (
    toggleNavbar('no-search', 'search')
));

closeIcon.addEventListener('click', () => (
    toggleNavbar('search', 'no-search')
));

searchInput.addEventListener('keydown', (ev) => {
    console.log(ev.key)
});

searchButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (searchInput.value !== '') {
        renderShowsDOM(searchInput.value);
    }
});