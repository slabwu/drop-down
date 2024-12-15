class DropDown {
    constructor(name) {
        const selector = document.querySelector(`#${name} > .dropDownSelector`);
        const dropDown = document.querySelector(`#${name} .dropDown`);
        const options = Array.from(document.querySelector(`#${name} > .dropDown`).children);
    }
}

const example = new DropDown("dropDownContainer");