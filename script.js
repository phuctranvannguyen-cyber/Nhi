// ============================
// GOOD MORNING
// script.js
// ============================

// Đồng hồ
const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    clock.innerHTML = `${hour}:${minute}`;

}

updateClock();

setInterval(updateClock,1000);


// ============================
// Cánh hoa
// ============================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position="absolute";

    petal.style.left=Math.random()*window.innerWidth+"px";

    petal.style.top="-50px";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.opacity=.85;

    petal.style.transition="transform linear";

    petals.appendChild(petal);

    const duration=5000+Math.random()*4000;

    let x=(Math.random()-0.5)*300;

    requestAnimationFrame(()=>{

        petal.style.transform=
        `translate(${x}px,${window.innerHeight+120}px) rotate(${720*Math.random()}deg)`;

        petal.style.transitionDuration=duration+"ms";

    });

    setTimeout(()=>{

        petal.remove();

    },duration);

}

setInterval(createPetal,350);


// ============================
// Hạt sáng
// ============================

function sparkle(){

    const star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="6px";

    star.style.height="6px";

    star.style.borderRadius="50%";

    star.style.background="white";

    star.style.boxShadow="0 0 12px white";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*window.innerHeight+"px";

    star.style.opacity=0;

    star.style.transition=".8s";

    document.body.appendChild(star);

    requestAnimationFrame(()=>{

        star.style.opacity=1;

        star.style.transform="scale(1.8)";

    });

    setTimeout(()=>{

        star.style.opacity=0;

    },600);

    setTimeout(()=>{

        star.remove();

    },1400);

}

setInterval(sparkle,250);


// ============================
// Tim nở khi chạm
// ============================

const heart=document.querySelector(".heart");

heart.addEventListener("click",()=>{

    heart.animate(

        [

            {transform:"scale(1)"},
            {transform:"scale(1.35)"},
            {transform:"scale(1)"}

        ],

        {

            duration:450

        }

    );

    for(let i=0;i<18;i++){

        const mini=document.createElement("div");

        mini.innerHTML="💗";

        mini.style.position="fixed";

        const rect=heart.getBoundingClientRect();

        mini.style.left=(rect.left+rect.width/2)+"px";
        mini.style.top=(rect.top+rect.height/2)+"px";

        mini.style.pointerEvents="none";

        document.body.appendChild(mini);

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*80;

        mini.animate([

            {

                transform:"translate(0,0) scale(.5)",

                opacity:1

            },

            {

                transform:`translate(${Math.cos(angle)*distance}px,${Math.sin(angle)*distance}px) scale(1.4)`,

                opacity:0

            }

        ],{

            duration:900,

            easing:"ease-out"

        });

        setTimeout(()=>mini.remove(),900);

    }

});