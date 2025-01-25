// easy scroll
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// interactivity
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// typing effect
const textElement = document.getElementById("typing-text");
const textContent = textElement.textContent; 
textElement.textContent = "";
let index = 0;

function typeEffect() {
    if (index < textContent.length) {
        textElement.textContent += textContent[index];
        index++;
        setTimeout(typeEffect, 10); 
    } else {
        textElement.classList.add("blink");
    }
}

typeEffect();


