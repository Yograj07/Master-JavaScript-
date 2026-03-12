let refreshBtn = document.querySelector("#refreshBtn");
let getUser = () => {

    fetch("https://randomuser.me/api/?results=4").then((raw) => raw.json())
        .then((data) => {

             document.querySelector(".users").innerHTML = "";
            data.results.forEach((user) => {
                // Main card container
                console.log(user);

                const card = document.createElement("div");
                card.className = "bg-gray-800 rounded-lg shadow-lg p-6 w-80 text-white";

                // Image
                const img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "User";
                img.className = "w-24 h-24 rounded-full mx-auto mb-4";

                // Name
                const name = document.createElement("h2");
                name.className = "text-2xl font-bold text-center mb-2";
                name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;



                // email
                const email = document.createElement("p");
                email.className = "text-gray-300 text-sm text-center mb-6";
                email.textContent = `${user.email}`;

                // Status container
                const statusBox = document.createElement("div");
                statusBox.className = "flex items-center justify-center gap-2";

                // Status dot
                const dot = document.createElement("div");
                dot.className = "w-3 h-3 bg-green-500 rounded-full";

                // Status text
                const statusText = document.createElement("span");
                statusText.className = "text-sm font-semibold";
                statusText.textContent = "Active";

                // Append status elements
                statusBox.appendChild(dot);
                statusBox.appendChild(statusText);

                // Append everything into card
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(email);
                card.appendChild(statusBox);

                // Add card to body (or any container)
                document.querySelector(".users").appendChild(card);
            })
        })

}

getUser();

refreshBtn.addEventListener("click",()=>{
    getUser();
})