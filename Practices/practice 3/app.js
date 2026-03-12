// **____________ Created animated moving ractengle ---> learned how to mapRange works and how to apply logics on dom elements

// ? Step 01 : Access the rectangle first 🔍☑️
// ? Step 02 : Then we need to add eventListener to the window 👏
// ? Step 03 : Get the clientX cordintaion while moving the mouse on window screen 👍
// ? Step 04 : Bring the gsap cdn from the internet , we will use it for animations & more 🤯
// ? Step 05 : Move the rectangle with mouse move -- use gsap.to --> left : clientX you smart enough to understand what i want to say.. 🫡🫡 haha just kidding lol
// ? Step 06 : Add logic into card moving --- use gsap.utils.mapRange and calculate the leftes side and rightes side of the screen and move the rectangle slightly , what you really do is that , get the width of the rectangle and at the left side move the rectangle rigth side by half of the width & for the right subtract the width of the rectangle from window.innerWidth....... + we can decrease the some initial value like 100 points.


// !*----> let's make it

let moveRect = () => {
  window.addEventListener("mousemove", (dets) => {
    let rect = document.querySelector("#rect");
    let valueX = gsap.utils.mapRange(
      0,//* inital minimum value 
      window.innerWidth, //* initial maximum value
      100 + rect.getBoundingClientRect().width / 2, //* value to change inital minimum
      window.innerWidth - 200,//* value to change inital maximum
      dets.clientX, //* current position
    );

    console.log(dets.clientX);
    
    gsap.to("#rect", {
      left: `${valueX}px`,
      ease: Power4,
      duration:1.5
    })
  });
};

moveRect();
