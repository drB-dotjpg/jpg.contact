const images = document.querySelectorAll('img, video');

const modal = document.querySelector('#modal');
const modalImage = document.querySelector('#modal > img');
const modalVideo = document.querySelector('#modal > video');
console.log(modalImage);

modal.addEventListener('click', () => {
    gsap.to(modal, {
        display: "none",
        background: "#00000000",
        "backdrop-filter": "blur(0px)",
        duration: 0.2,
        ease: "power1.in"
    });
    gsap.to([modalImage, modalVideo], {
        opacity: 0,
        scale: 0.9,
        filter: "blur(12px)",
        duration: 0.2,
        ease: "power1.in"
    });
});

for (let i = 0; i < images.length; i++){
    const image = images[i];
    if (image.classList.contains("no-modal")){
        continue;
    }
    image.setAttribute("onClick", `showImageModal('${image.src}', '${image.alt}', '${image.tagName}')`);
}

function showImageModal(src, alt, type){
    let target = type === "IMG" ? modalImage : modalVideo;
    let other = type === "IMG" ? modalVideo : modalImage;
    
    target.style.display = "block";
    other.style.display = "none";

    gsap.to(modal, {
        display: "flex",
        background: "#000000A0",
        "backdrop-filter": "blur(12px)",
        duration: 0.3,
        ease: "power2.in"
    });
    gsap.fromTo(target, 
        {
            opacity: 0,
            scale: 0.9,
            filter: "blur(12px)"
        },  
        {
            onStart: () => {
                target.src = src;
                target.alt = alt;
            },
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.3,
            ease: "power2.in"
        }
    );
}