const navButtons = document.querySelectorAll(".nav-button");
const sectionTl = gsap.timeline();

for (var i = 0; i < navButtons.length; i++) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has(navButtons[i].dataset.goTo)){
        navButtons[i].click();
        break;
    }
}

function navOnClick(obj){
    const noAnim = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animOutConfig = !noAnim ? {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0
    }  : {
        opacity: 0
    };
    const animInConfig = !noAnim ? {
        height: "auto",
        paddingTop: 24,
        paddingBottom: 48
    } : {
        opacity: 1
    }

    if (obj.classList.contains("selected")){
        return;
    }

    for (var i = 0; i < navButtons.length; i++){
        if (navButtons[i].classList.contains("selected")){
            navButtons[i].classList.remove("selected");

            const sectionToClose = document.getElementById(navButtons[i].dataset.goTo)
            sectionTl.to(sectionToClose, {
                ...animOutConfig,
                ease: "power3.inOut",
                duration: .5,
                onComplete: function() {
                    sectionToClose.style.display = "none";
                }
            })
        }
    }

    obj.classList.add("selected");

    const sectionToOpen = document.getElementById(obj.dataset.goTo);
    sectionTl.fromTo(sectionToOpen, {
        height: !noAnim ? 0 : "auto",
        opacity: noAnim ? 0 : 1,
        display: "block",
        borderBottomWidth: 0
    }, {
        onStart: function(){
            sectionToOpen.style.borderBottomWidth = ".2rem";
        },
        ...animInConfig,
        duration: .5,
        ease: "power3.inOut"
    });

    window.history.replaceState(null, null, "?" + obj.dataset.goTo);
}

function worksNavOnClick(obj){
    const elim = document.getElementById(obj.dataset.goTo);
    console.log(elim);
    elim.scrollIntoView();
}