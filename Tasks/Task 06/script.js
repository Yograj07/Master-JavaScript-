let changeBackground = () => {
    let div = document.querySelector("#container");
    let btn = document.querySelector("#btn");

    if (!div || !btn) return;

    btn.addEventListener("click", () => {
        let rnHaxCode = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        div.style.backgroundColor = rnHaxCode;
    });
};

changeBackground();
