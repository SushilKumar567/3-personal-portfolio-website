// ----------about----------
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

const opentab = (tabname) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --------responsiveness-------
var sidemenu = document.getElementById("sidemenu");
const openmenu = () => {
    sidemenu.style.right = "0";
}
const closemenu = () => {
    sidemenu.style.right = "-200px";
}
