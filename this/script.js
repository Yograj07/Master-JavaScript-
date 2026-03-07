let form = document.querySelector("form");
let userName = document.querySelector("#userName");
let role = document.querySelector("#roleInput");
let bio = document.querySelector("#bioInput");
let profileURL = document.querySelector("#photoInput");
let profiles = document.querySelector(".profiles");
let container = document.querySelector(".container");
const h2 = document.createElement("h2");

const manageUsers = {
    users: [],
    init: function () {
        this.loadUsers(); // Load from localStorage on init
        form.addEventListener("submit", this.submitForm.bind(this));
        h2.className = "bg-gray-900 text-red-500 text-2xl text-center";
        h2.textContent = "Please add a profile ";
        if (this.users.length === 0) {
            container.appendChild(h2);
        }
        this.renderUI();
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        const newUser = {
            userName: userName.value,
            role: role.value,
            bio: bio.value,
            profileURL: profileURL.value,
        };
        this.users.push(newUser);
        form.reset();
        if (h2.parentElement) {
            h2.remove();
        }
        this.saveUsers();
        this.renderUI();
    },
    renderUI: function () {
        profiles.innerHTML = "";
        if (this.users.length === 0) {
            if (!h2.parentElement) {
                container.appendChild(h2);
            }
            return;
        }
        this.users.forEach((user, index) => {
            const card = document.createElement("div");
            card.id = `card${index}`;
            card.className = "w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 duration-300 hover:scale-105 ease-in-out";

            const cardContainer = document.createElement("div");
            cardContainer.className = "flex flex-col items-center space-y-4";

            const img = document.createElement("img");
            img.src = user.profileURL;
            img.alt = "Profile";
            img.className = "w-24 h-24 rounded-full object-cover border-4 border-blue-500";

            const name = document.createElement("h2");
            name.className = "text-2xl font-bold text-white";
            name.textContent = user.userName;

            const roleElem = document.createElement("p");
            roleElem.className = "text-blue-400 font-semibold";
            roleElem.textContent = user.role;

            const bioElem = document.createElement("p");
            bioElem.className = "text-gray-300 text-center text-sm leading-relaxed";
            bioElem.textContent = user.bio;

            const removeBtn = document.createElement("button");
            removeBtn.className = "mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition";
            removeBtn.textContent = "Remove";

            removeBtn.addEventListener("click", this.removeUser.bind(this, index));

            cardContainer.appendChild(img);
            cardContainer.appendChild(name);
            cardContainer.appendChild(roleElem);
            cardContainer.appendChild(bioElem);
            cardContainer.appendChild(removeBtn);

            card.appendChild(cardContainer);
            profiles.appendChild(card);
        });
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.saveUsers();
        this.renderUI();
    },
    saveUsers: function () {
        localStorage.setItem("cards", JSON.stringify(this.users));
    },
    loadUsers: function () {
        const saved = localStorage.getItem("cards");
        this.users = saved ? JSON.parse(saved) : [];
    },
};

manageUsers.init();
