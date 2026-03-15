// * An input field that shows the character 
// * count in real time below it as you type.

// * Hint: Listen to the 'input' event.
// * Update a <span>'s textContent with input.value.length


let characterCounter = () => {
    let inp = document.querySelector("#txt-input");
    let printCounts = document.querySelector("#txt-counter");

    if (!inp || !printCounts) return;

    inp.addEventListener("input", (e) => {
        let countChars = e.target.value.length;
        printCounts.textContent = countChars;
    });
}
characterCounter();