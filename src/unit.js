export const $ = selecter => {
    let elements = document.querySelectorAll(selecter);
    return elements.length === 1 ? elements[0] : [...elements]
}