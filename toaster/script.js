function createToaster(config) {

    return function (notification) {

        // ? Parent div : 

        let parent = document.getElementById("parent");

        let div = document.createElement("div");
        div.className = `inline-block  ${config.positionX === "top" ? "top-4 left-4" : "bottom-4 right-4"}  ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded-lg shadow-lg`
        div.textContent = notification;

        parent.appendChild(div)
        


        setTimeout(() => {

            document.getElementById("parent").removeChild(div);

        }, config.duration * 1000);

    }

}

let toaster = createToaster({
    theme: "dark",
    positionX: "top",
    positionY: "right",
    duration: 3
});

toaster("☑️ Form submitted !");


let toaster2 = createToaster({
    theme: "dark",
    positionX: "top",
    positionY: "right",
    duration: 5
});

toaster2("🔍 Reviewing your application !");



let toaster3 = createToaster({
    theme: "dark",
    positionX: "top",
    positionY: "right",
    duration: 7
});

toaster3("☑️ Request accepted");