// Imports
import { toggle } from './ui.js';

// Fetch DOM nodes
const navbar = document.querySelector('#navbar');
const searchIcon = document.querySelector('#navbar-search');
const closeIcon = document.querySelector('#navbar-close');

// Declare functions
const handleNavbar = toggle(navbar);

// Add event handlers
searchIcon.addEventListener('click', () => (
    handleNavbar('no-search', 'search')
));

closeIcon.addEventListener('click', () => ( 
    handleNavbar('search', 'no-search')
));
