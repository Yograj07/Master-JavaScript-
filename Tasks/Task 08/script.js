//* +++++++++++ Task 08 +++++++++++++++++

//? ------ Defination -------
//* A button that toggles visibility of a paragraph.
//* Button text should alternate: "Show" and "Hide"
//* Hint: classList.toggle() or toggle display style.
//* Update button.textContent based on state.

let handleToggle = () => {

    let toggleBtn = document.querySelector("#toggle");
    let p = document.querySelector("p");

    if (!p || !toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        p.classList.toggle("hide");
        p.classList.contains("hide") ? toggleBtn.textContent = "Show" : toggleBtn.textContent = "Hide";

    });

}
handleToggle();