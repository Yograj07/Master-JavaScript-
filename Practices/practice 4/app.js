// ** Created a powerfull animation and learned a gsap concepts as well as learned dom manipulation + code throtting and more


function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

const IMAGES = [
    { id: 1, url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800" },
    { id: 2, url: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800" },
    { id: 3, url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" },
    { id: 4, url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800" },
    { id: 5, url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" },
    { id: 6, url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800" },
    { id: 7, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
    { id: 8, url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800" },
    { id: 9, url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" },
    { id: 10, url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800" },
];

const getRandomImage = () => IMAGES[Math.floor(Math.random() * IMAGES.length)];

const createImageElement = (x, y) => {
    const div = document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left = `${x}px`;
    div.style.top = `${y - 230}px`;

    const img = document.createElement("img");
    img.src = getRandomImage().url;
    img.style.opacity = "0";
    
    div.appendChild(img);
    document.body.appendChild(div);

    return img;
};

const animateImage = (img) => {
    gsap.to(img, { y: 0, ease: Power2, rotation: 3, duration: 0.6, opacity: 1 });
    gsap.to(img, { y: "100%", delay: 1.4, ease: Power2, rotation: -5, opacity: 0, duration: 0.6 });
};

document.querySelector("#center").addEventListener(
    "mousemove",
    throttle((dets) => {
        const img = createImageElement(dets.clientX, dets.clientY);
        animateImage(img);
        
        setTimeout(() => img.parentElement.remove(), 2000);
    }, 450)
);
