// * Step 1 : rectangle par mouse track kar na , mouse rectangle par hai ya nahi ye dekh na.

let rect = document.getElementById("rect");
rect.style.backgroundColor = "#0a0a0a";
rect.style.borderRadius = "2px";

let changeColor = () => {
  rect.addEventListener("mousemove", (dets) => {
    let mousePosition = dets.clientX;
    let rectPosition = rect.getBoundingClientRect();
    let innerRectposition = mousePosition - rectPosition.left;

    if (innerRectposition < rectPosition.width / 2) {
      let red = gsap.utils.mapRange(
        0,
        rectPosition.width / 2,
        255,
        0,
        innerRectposition,
      );
      gsap.to(rect, {
        backgroundColor: `rgb(${red},0,0)`,
        borderRadius: `30px`,
        ease: Power2,
      });
    } else {
      let blue = gsap.utils.mapRange(
        rectPosition.width / 2,
        rectPosition.width,
        0,
        255,
        innerRectposition,
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0,0,${blue})`,
        ease: Power2,
        borderRadius:`30px`
      });
    }
  });

  rect.addEventListener("mouseleave", () => {
    gsap.to(rect, {
      backgroundColor: "#0a0a0a",
      borderRadius: "5px",
      ease: Power2,
    });
  });
};

changeColor();
