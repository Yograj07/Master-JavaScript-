// //* Task 12 : 
// //* Render a static list of 10 names.
// //* An input filters visible items as you type — case-insensitively.
// //* Hint: On every 'input' event, loop all <li> items and toggle display:none based on whether the name includes the query string

let inp = document.querySelector("#inp");
let ul = document.querySelector("ul");
let err = document.querySelector("#err");

// if (!inp || !ul || !err) return; // can not use outside of a function 

let names = [
    "yograj", "arjun", "bhargav", "jaimin", "jaydip",
    "chirag", "ketan", "sidhdharth", "dev", "oko yoko"
];

let displayNames = () => {
    names.forEach((name) => {
        let li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    });
}

let search = () => {

    inp.addEventListener("input", (e) => {

        let query = e.target.value.toLowerCase().trim();
        let allNames = document.querySelectorAll("ul li");
        let countResult = 0;

        allNames.forEach((item) => {
            let isMatchName = item.textContent.toLowerCase().includes(query);
            item.style.display = isMatchName ? "block" : "none";
            if (isMatchName) {
                countResult++;
            }
        });

        err.style.display = countResult === 0 ? "block" : "none";
    });
}

displayNames();
search();