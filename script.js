// ================================
// Good Morning V2
// script.js
// ================================

// Đồng hồ
const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");

    clock.textContent = `${h}:${m}:${s}`;
}

updateClock();
setInterval(updateClock, 1000);


// ================================
// Lời chúc theo thời gian
// ================================

const title = document.getElementById("title");
const message = document.getElementById("message");

function updateGreeting() {

    const hour = new Date().getHours();

    if (hour < 11) {

        title.textContent = "☀️ Good Morning";
        message.textContent =
            "Chúc bạn có một ngày thật nhiều năng lượng, luôn mỉm cười và gặp thật nhiều điều may mắn. 🌸";

    } else if (hour < 18) {

        title.textContent = "🌤 Have a Wonderful Day";
        message.textContent =
            "Hy vọng hôm nay sẽ mang đến thật nhiều niềm vui và những điều tốt đẹp dành cho bạn. 💗";

    } else {

        title.textContent = "🌙 Good Evening";
        message.textContent =
            "Chúc bạn có một buổi tối thật bình yên và thư giãn. ✨";

    }

}

updateGreeting();


// ================================
// Cánh hoa rơi
// ================================

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-40px";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    petal.style.pointerEvents = "none";

    petals.appendChild(petal);

    let x = (Math.random() - 0.5) * 250;
    let rotate = Math.random() * 720;
    let duration = 5000 + Math.random() * 4000;

    requestAnimationFrame(() => {

        petal.style.transition =
            `transform ${duration}ms linear`;

        petal.style.transform =
            `translate(${x}px,${window.innerHeight + 120}px) rotate(${rotate}deg)`;

    });

    setTimeout(() => {

        petal.remove();

    }, duration);

}

setInterval(createPetal, 280);


// ================================
// Hạt sáng
// ================================

const sparkles = document.getElementById("sparkles");

function createSparkle() {

    const star = document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "6px";
    star.style.height = "6px";
    star.style.borderRadius = "50%";
    star.style.background = "#fff";
    star.style.boxShadow = "0 0 10px white";
    star.style.opacity = "0";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    sparkles.appendChild(star);

    requestAnimationFrame(() => {

        star.style.transition = ".8s";

        star.style.opacity = "1";

        star.style.transform = "scale(2)";

    });

    setTimeout(() => {

        star.style.opacity = "0";

    }, 500);

    setTimeout(() => {

        star.remove();

    }, 1200);

}

setInterval(createSparkle, 180);


// ================================
// Hiệu ứng trái tim
// ================================

const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {

    heart.animate(

        [
            { transform: "scale(1)" },
            { transform: "scale(1.25)" },
            { transform: "scale(1)" }
        ],

        {
            duration: 400
        }

    );

    for (let i = 0; i < 20; i++) {

        const mini = document.createElement("div");

        mini.textContent = "💗";

        mini.style.position = "fixed";

        const rect = heart.getBoundingClientRect();

        mini.style.left =
            rect.left + rect.width / 2 + "px";

        mini.style.top =
            rect.top + rect.height / 2 + "px";

        mini.style.pointerEvents = "none";

        document.body.appendChild(mini);

        const angle = Math.random() * Math.PI * 2;

        const distance = 60 + Math.random() * 90;

        mini.animate(

            [
                {
                    transform: "translate(0,0) scale(.5)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${Math.cos(angle) * distance}px,${Math.sin(angle) * distance}px) scale(1.4)`,
                    opacity: 0
                }
            ],

            {
                duration: 900,
                easing: "ease-out"
            }

        );

        setTimeout(() => {

            mini.remove();

        }, 900);

    }

});


// ================================
// Hiệu ứng xuất hiện của card
// ================================

const card = document.querySelector(".card");

card.animate(
    [
        {
            opacity: 0,
            transform: "translateY(40px)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ],
    {
        duration: 1200,
        easing: "ease-out"
    }
);