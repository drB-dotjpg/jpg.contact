//create sidebar navigation
const sideBar = document.querySelector('#sidebar');
const sections = document.querySelectorAll('.section');

for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const element = document.createElement('a');
    
    if (section.id === ""){
        section.id = `section${i + 1}`;
    }
    if (section.classList.contains("big")){
        element.style.fontSize = "1.3em";
        element.style.fontWeight = "600";
        element.style.textDecoration = "underline";
    }
    element.setAttribute('href', `#${section.id}`);
    element.textContent = section.querySelector(".title").innerText;
    sideBar.appendChild(element);
}



//create images to be displayed in a modal
const images = document.querySelectorAll('img');

const modal = document.querySelector('#modal');
const modalImage = document.querySelector('#modal-image');
console.log(modalImage);

modal.addEventListener('click', () => {
    gsap.to(modal, {
        display: "none",
        background: "#00000000",
        "backdrop-filter": "blur(0px)",
        duration: 0.2,
        ease: "power1.in"
    });
    gsap.to(modalImage, {
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
    image.setAttribute("onClick", `showImageModal('${image.src}', '${image.alt}')`);
}

function showImageModal(src, alt){
    console.log(src, alt);
    gsap.to(modal, {
        display: "flex",
        background: "#000000A0",
        "backdrop-filter": "blur(12px)",
        duration: 0.3,
        ease: "power2.out"
    });
    gsap.fromTo(modalImage, 
        {
            opacity: 0,
            scale: 0.9,
            filter: "blur(12px)"
        },  
        {
            onStart: () => {
                console.log("start", modalImage);
                modalImage.src = src;
                modalImage.alt = alt;
            },
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.3,
            ease: "power2.out"
        }
    );
}