//* Task 11 : 
//*  Add items → click to mark done (strikethrough)
//*  → delete button per item → show count of remaining tasks.
//*  Hint: Store todos in an array. 
//*  Re-render the  list on every state change instead of patching DOM directly.

let inp = document.querySelector("#inp");
let addBtn = document.querySelector("#btn-add");
let ul = document.querySelector("#todo-list");
let err = document.querySelector("#msg");
let remain = document.querySelector("#Remaining");

let todos = [];

let renderUI = () => {
    ul.innerHTML = "";
    let remaining = todos.filter(t => !t.done).length;
    remain.textContent = remaining;
    err.style.display = todos.length === 0 ? "block" : "none";

    todos.forEach((todo, indx) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let delBtn = document.createElement("button");

        span.textContent = (indx + 1) + ". " + todo.text;
        if (todo.done) span.classList.add("completed");
        delBtn.textContent = "X";

        li.appendChild(span);
        li.appendChild(delBtn);
        ul.appendChild(li);

        span.addEventListener("click", () => {
            todo.done = !todo.done;  // update data
            renderUI();              // re-render from data
        });

        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            todos.splice(indx, 1);
            renderUI();
        });
    });
};

let addTodo = () => {
    let inpVal = inp.value.trim();
    if (inpVal === "") return;
    todos.push({ id: Date.now(), text: inpVal, done: false });
    inp.value = "";
    renderUI();
};

inp.addEventListener("keydown", (e) => { if (e.key === "Enter") addTodo(); });
addBtn.addEventListener("click", addTodo);

renderUI();
