/* ====================================
   AZIZ ASADOV PORTFOLIO V2
==================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const fill = document.querySelector(".loader-fill");
    const loadingText = document.getElementById("loading-text");

    const messages = [
        "Initializing Ecosystem...",
        "Loading AI Systems...",
        "Connecting Automation...",
        "Preparing Projects...",
        "Launching Portfolio..."
    ];

    let current = 0;

    const textInterval = setInterval(() => {

        current++;

        if (current < messages.length) {

            loadingText.textContent = messages[current];

        }

    }, 600);

    fill.style.width = "100%";
    fill.style.transition = "3s ease";

    setTimeout(() => {

        clearInterval(textInterval);

        loader.style.opacity = "0";
        loader.style.transition = "0.8s ease";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 3200);

});


/* NAVBAR BLUR */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.8)";

        navbar.style.backdropFilter =
            "blur(20px)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.04)";

    }

});


/* HERO PARALLAX */

window.addEventListener("mousemove", (e) => {

    const card =
        document.querySelector(".avatar-card");

    if (!card) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    card.style.transform =
        `rotateY(${-x}deg) rotateX(${y}deg)`;

});
