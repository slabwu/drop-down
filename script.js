class DropDown {
    constructor(name) {
        const selector = document.querySelector(`#${name} > .dropDownSelector`);
        const dropDown = document.querySelector(`#${name} .dropDown`);
        const options = Array.from(document.querySelector(`#${name} > .dropDown`).children);

        selector.addEventListener("click", () => {
            dropDown.hidden = false;
        })
    }
}

const example = new DropDown("dropDownContainer");