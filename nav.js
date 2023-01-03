const navButtons = document.querySelectorAll(".nav-button");

function navOnClick(obj){
    if (obj.classList.contains("selected")){
        return;
    }

    const sectionTl = gsap.timeline();

    for (var i = 0; i < navButtons.length; i++){
        if (navButtons[i].classList.contains("selected")){
            navButtons[i].classList.remove("selected");
            gsap.to(navButtons[i], {
                y: 0,
                duration: .12,
                ease: "power3.inOut"
            });
            const sectionToClose = document.getElementById(navButtons[i].dataset.goTo)
            sectionTl.to(sectionToClose, {
                height: 0,
                ease: "power3.inOut",
                duration: .5,
                paddingTop: 0,
                paddingBottom: 0,
                onComplete: function() {
                    sectionToClose.style.display = "none";
                }
            })
        }
    }

    obj.classList.add("selected");
    gsap.to(obj, {
        y: 20,
        duration: .12,
        ease: "power3.inOut"
    });

    const sectionToOpen = document.getElementById(obj.dataset.goTo);
    sectionTl.fromTo(sectionToOpen, {
        height: 0,
        display: "block",
        borderBottomWidth: 0
    }, {
        onStart: function(){
            sectionToOpen.style.borderBottomWidth = ".2rem";
        },
        height: "auto",
        paddingTop: 16,
        paddingBottom: 16,
        duration: .5,
        ease: "power3.inOut"
    });
}