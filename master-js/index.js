let test = true;

document.getElementById("link").addEventListener("click", () => {
    if (test) {
        document.querySelector(".hidden-sec").style.margin = 0;
        test = false;
    } else {
        document.querySelector(".hidden-sec").style.margin = '0 0 0 -265px';
        test = true;
    }
})


let sectionAbout = document.querySelector(".about").offsetTop;

window.onscroll = function () {
    if (window.scrollY >= sectionAbout) {
        console.log("done");
        document.querySelector(".navbar").classList.add("bg-nav");
    } else {
        document.querySelector(".navbar").classList.remove("bg-nav");
    }
}