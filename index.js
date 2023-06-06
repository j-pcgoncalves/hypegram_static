AOS.init();

// Animated Counters
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
})

$(document).ready(function () {
    $(".counter").counterUp();
});

// On mobile, when iser clicks one of the hamburger menu's navbar will collapse/uncollapse
const lis = document.querySelectorAll(".navbar-collapse ul li a");
const containerOfLis = document.querySelector(".navbar-collapse");
const hamburgerMenu = document.querySelector(".navbar-toggler");

lis.forEach(li => {li.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("collapsed");
    containerOfLis.classList.toggle("show");
})});