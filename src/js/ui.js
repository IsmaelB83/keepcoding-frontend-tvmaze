const logo = document.querySelector('#navbar .navbar-logo');

const toggle = elemento => (removeClass, addClass) => {
    elemento.classList.remove(removeClass);
    elemento.classList.add(addClass);
}

const handleLogoClassName = toggle(logo);

export { toggle };