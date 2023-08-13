const transitionBlock = document.getElementById("transition-cover");

function pageIn(){
    transitionBlock.style.transform = "translate(0%, 0%)";
    setTimeout(function(){
        transitionBlock.style.transform = "translate(0%, -100%)";
    }, 1200);
};

window.addEventListener('load', pageIn);

const homeMenuLink = document.getElementById("home-link");
if (homeMenuLink){
    homeMenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Landing/index.html";
        }, 800);
    });
};

const homeLogoLink = document.getElementById("logo-link");
if (homeLogoLink){
    homeLogoLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Landing/index.html";
        }, 800);
    });
};

const labMenuLink = document.getElementById("lab-link");
if (labMenuLink){
    labMenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Lab/lab.html";
        }, 800);
    });
};

const codeMenuLink = document.getElementById("code-link");
if (codeMenuLink){
    codeMenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Code/code.html";
        }, 800);
    });
};

const aboutMenuLink = document.getElementById("about-link");
if (aboutMenuLink){
    aboutMenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/About/about.html";
        }, 800);
    });
};

const p1MenuLink = document.getElementById("p1-link");
if(p1MenuLink){
    p1MenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Nebula/nebula.html";
        }, 800);
    });
};

const p1SectionLink = document.getElementById("p1-section");
if(p1SectionLink){
    p1SectionLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Nebula/nebula.html";
        }, 800);
    });
    
};

const p2MenuLink = document.getElementById("p2-link");
if(p2MenuLink){
    p2MenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Angine/aingine.html";
        }, 800);
    });
};

const p2SectionLink = document.getElementById("p2-section");
if(p2SectionLink){
    p2SectionLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Angine/aingine.html";
        }, 800);
    });
};

const p3MenuLink = document.getElementById("p3-link");
if(p3MenuLink){
    p3MenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Immersion_Lab/immersion.html";
        }, 800);
    });
};

const p3SectionLink = document.getElementById("p3-section");
if(p3SectionLink){
    p3SectionLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Immersion_Lab/immersion.html";
        }, 800);
    });
};

const p4MenuLink = document.getElementById("p4-link");
if(p4MenuLink){
    p4MenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Neuron/neuron.html";
        }, 800);
    });
};

const p4SectionLink = document.getElementById("p4-section");
if(p4SectionLink){
    p4SectionLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Neuron/neuron.html";
        }, 800);
    });
};

const p5MenuLink = document.getElementById("p5-link");
if(p5MenuLink){
    p5MenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Airbnb/airbnb.html";
        }, 800);
    });
};

const p5SectionLink = document.getElementById("p5-section");
if(p5SectionLink){
    p5SectionLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Airbnb/airbnb.html";
        }, 800);
    });
};

const p6MenuLink = document.getElementById("p6-link");
if(p6MenuLink){
    p6MenuLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Fracture/frature.html";
        }, 800);
    });
};

const p6SectionLink = document.getElementById("p6-section");
if(p6SectionLink){
    p6SectionLink.addEventListener("click", function(){
        transitionBlock.style.transform = "translate(0%, 0%)";
        setTimeout(function(){
            location.href = "/Pages/Fracture/frature.html";
        }, 800);
    });
};