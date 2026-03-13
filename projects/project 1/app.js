//* BubbleGum game using html css js

//* Learned how event bubbling and other js concepts like dom manipulation etc etc works, as well understand how to bulid logics to reality........

let score = 0;
let time = 60;
let hitrn = 0;

let createBubble = () => {
  let clutter = "";
  for (let i = 1; i <= 75; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"><h3>${rn}</h3></div>`;
  }

  let pbtm = document.querySelector("#pbtm");
  pbtm.innerHTML = clutter;
};



let runTimer = () => {
  let timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#time").textContent = time;
      if (time <= 20) {
        document.querySelector("#time").style.color = "#B80000";
      }
    } else {
      clearInterval(timer);
      let gameDisplay = document.querySelector("#pbtm");
      gameDisplay.innerHTML = "";

      const scoreDiv = document.createElement("div");
      scoreDiv.classList.add("showscore");

      const heading = document.createElement("h1");
      heading.textContent = `You Scored - ${score} !`;

      const resetButton = document.createElement("button");
      resetButton.classList.add("reset");

      const resetImg = document.createElement("img");
      resetImg.src = "reset.svg";
      resetImg.alt = "reset";

      resetButton.appendChild(resetImg);
      resetButton.append(" Restart game");
      scoreDiv.appendChild(heading);
      scoreDiv.appendChild(resetButton);

      gameDisplay.appendChild(scoreDiv);

      document.querySelector("#hitval").textContent = 0;

      resetButton.addEventListener("click", () => {
        window.location.reload();
      });
    }
  }, 1000);
};
let createNewHit = () => {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
};
let updateScore = () => {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
};

document.querySelector("#pbtm").addEventListener("click", (dets) => {
  let clickedVal = parseInt(dets.target.textContent);
  if (clickedVal === hitrn) {
    updateScore();
    createNewHit();
    createBubble();
  }
});

createBubble();
runTimer();
createNewHit();

// * Optimized bubble creation from ai

// let getBubbleCount = () => {
//   // Estimate bubble size (in px)
//   const bubbleSize = 65; // adjust if your CSS is different
//   const panel = document.querySelector("#pbtm");
//   const panelRect = panel.getBoundingClientRect();
//   const panelWidth = panelRect.width;
//   const panelHeight = panelRect.height;

//   // Calculate how many bubbles fit (with a little margin)
//   const cols = Math.floor(panelWidth / bubbleSize);
//   const rows = Math.floor(panelHeight / bubbleSize);
//   return cols * rows;
// };

// let createBubble = () => {
//   let panelBottom = document.querySelector("#pbtm");
//   let clutter = "";
//   const bubbleCount = getBubbleCount();
//   for (let i = 1; i <= (bubbleCount ); i++) {
//     let rn = Math.floor(Math.random() * 10);
//     clutter += `<div class="bubble"><h3>${rn}</h3></div>`;
//   }
//   panelBottom.innerHTML = clutter;
// };