/**
 * Quita la clase CSS indicada en el primer parametro para sustituirla por la del segundo parametro
 * @param {String} removeClass CSS Class to remove
 * @param {String} addClass CSS Class to add
 */
const toggle = (element, removeClass, addClass) => {
    if (removeClass) element.classList.remove(removeClass);
    if (addClass) element.classList.add(addClass);
}

/**
 * Tras el click hace toggle sobre la clase indicada
 * @param {Node} element Elmemento del DOM
 * @param {String} cssClass CSS Class to perform the toggle
 */
const toggleAfterClick = (element, cssClass) => {
    element.classList.toggle(cssClass);
}

/**
 * Exports
 */
export {
    toggle,
    toggleAfterClick
};