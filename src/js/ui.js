/**
 * 
 * @param {String} removeClass CSS Class to remove
 * @param {String} addClass CSS Class to add
 */
const toggle = elemento => (removeClass, addClass) => {
    if (removeClass) elemento.classList.remove(removeClass);
    if (addClass) elemento.classList.add(addClass);
}

/**
 * Exports
 */
export {
    toggle
};