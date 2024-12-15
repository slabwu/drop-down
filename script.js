class DropDown {
    constructor(name) {
        const selector = document.querySelector(`#${name} > .dropDownSelector`);
        const dropDown = document.querySelector(`#${name} .dropDown`);
        const options = Array.from(document.querySelector(`#${name} > .dropDown`).children);
        
        this.whenClicked(selector, () => {console.log("meow");dropDown.classList.add("active")});
        this.whenClicked(window, (e) => {
            if (options.includes(e.target)) console.log(e.target.textContent);
            if (e.target !== dropDown && e.target !== selector) dropDown.classList.remove("active");
        });
    }

    whenClicked(source, action) {
        source.addEventListener("click", action);
    }
}

const example = new DropDown("dropDownContainer");