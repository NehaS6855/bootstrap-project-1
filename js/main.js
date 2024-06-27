// active navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}


//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show")
    })
})



//Counter Design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start;
        let range = end - start;
        let increament = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increament;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);

    }
    counter("count1", 0, 2278, 3000);
    counter("count2", 2278, 4513, 4000);
    counter("count3", 4513, 100254, 5000);
    counter("count4", 10000, 40879, 6000);

})

