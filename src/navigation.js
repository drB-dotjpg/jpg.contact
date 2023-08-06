const sideBar = document.querySelector('#sidebar');
const pageContent = document.querySelector('#page-content');
const sections = document.querySelectorAll('.section');

for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const element = document.createElement('a');
    
    if (section.id === ""){
        section.id = `section${i + 1}`;
    }
    if (section.classList.contains("big")){
        element.classList.add("big");
    }

    element.setAttribute('onClick', `scrollToId('${section.id}')`);
    element.textContent = section.querySelector(".title").innerText;
    sideBar.appendChild(element);

    ScrollTrigger.create({
        trigger: section,
        scroller: "#page-content",
        start: "center bottom",
        end: "center top",
        onEnter: () => {
            element.classList.add("active");
            const tl = gsap.timeline();
            tl.to(element, {y: 10, duration: 0.15, ease: "power1.in"});
            tl.to(element, {y: 0, duration: 0.15, ease: "power1.out"});
        },
        onEnterBack: () => {
            element.classList.add("active");
            const tl = gsap.timeline();
            tl.to(element, {y: -10, duration: 0.15, ease: "power1.in"});
            tl.to(element, {y: 0, duration: 0.15, ease: "power1.out"});
        },
        onLeave: () => {
            element.classList.remove("active");
        },
        onLeaveBack: () => {
            element.classList.remove("active");
        }
        
    });
}

function scrollToId(id){
    sideBar.classList.remove("visible");
    const element = document.getElementById(id);
    pageContent.scroll(0, element.offsetTop - (element.offsetHeight / 5));
}

function toggleBottomNav(){
    sideBar.classList.toggle("visible");
}