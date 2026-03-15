// **Task 9 — Dynamic list builder**
// ```
// ? An input + button. Clicking the button adds 
// ? the input text as a new <li> to a <ul>.
// ? Clear the input after adding.? 
// ? Hint: createElement, textContent, appendChild

let listBuilder = () => {

    let addBtn = document.querySelector("#add-btn");
    let inp = document.querySelector("#txt-input");
    let empty = document.querySelector("#empty");
    let ul = document.querySelector("#list-items");
    if (!addBtn || !inp || !empty || !ul) return;

    addBtn.addEventListener("click", () => {
        let inpVal = inp.value.trim();
        if (inpVal !== "") {
            let li = document.createElement("li");
            li.textContent = inpVal;
            ul.appendChild(li);
            inp.value = ""
            empty.style.display = "none";
            li.addEventListener("dblclick",()=>{
                li.remove();
            })
        }
        else {
            empty.style.display = "block";
        }

    });

}
listBuilder();