/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1600);

});


/* =========================
   COUNTDOWN
========================= */

const releaseDate =
    new Date("December 18, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = releaseDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            /
            1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {

        threshold: .12

    }

);


document
    .querySelectorAll(
        ".movie-card, .trailer-card, .timeline-item"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "all .8s ease";

        observer.observe(element);

    });


/* =========================
   MOUSE PARALLAX
========================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - .5);

    const y =
        (event.clientY / window.innerHeight - .5);


    const heroTitle =
        document.querySelector(".hero h1");


    if (heroTitle) {

        heroTitle.style.transform =
            `translate(${x * 10}px, ${y * 10}px)`;

    }

});


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const nav =
    document.querySelector(".navbar nav");


menuButton.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.padding = "30px";

        nav.style.flexDirection = "column";

        nav.style.background = "#050505";

    }

});