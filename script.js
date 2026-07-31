/*====================================================
            I'M SORRY PROJECT
            PART 1
====================================================*/


/*==============================
        ELEMENT
==============================*/

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const ending = document.getElementById("ending");

const typing = document.getElementById("typing");

const next1 = document.getElementById("next1");

const rain = document.getElementById("rain");

const sakuraContainer =
document.getElementById("sakura-container");

const heartContainer =
document.getElementById("heart-container");


/*==============================
        BUTTON DEFAULT
==============================*/

next1.style.display = "none";


/*==============================
        TYPING
==============================*/

const message = [

    "Có lẽ...",
    "Mình đã làm cậu buồn...",
    "Và điều đó...",
    "Là điều mình hối hận nhất..."

];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(textIndex >= message.length){

        next1.style.display = "inline-block";

        return;

    }

    if(charIndex < message[textIndex].length){

        typing.innerHTML +=
        message[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,60);

    }else{

        typing.innerHTML += "<br>";

        textIndex++;

        charIndex = 0;

        setTimeout(typeEffect,700);

    }

}

typeEffect();


/*==============================
        NEXT SCENE
==============================*/

next1.addEventListener("click",()=>{

    scene1.classList.add("hidden");

    scene2.classList.remove("hidden");

});


/*==============================
            RAIN
==============================*/

function createRain(){

    setInterval(()=>{

        const drop =
        document.createElement("div");

        drop.className="drop";

        drop.style.left =
        Math.random()*window.innerWidth+"px";

        drop.style.animationDuration =
        (.5+Math.random()*0.7)+"s";

        drop.style.opacity =
        .2+Math.random()*.8;

        rain.appendChild(drop);

        setTimeout(()=>{

            drop.remove();

        },1500);

    },35);

}

createRain();


/*==============================
            SAKURA
==============================*/

function createSakura(){

    setInterval(()=>{

        const flower =
        document.createElement("div");

        flower.innerHTML="🌸";

        flower.style.position="fixed";

        flower.style.left=
        Math.random()*window.innerWidth+"px";

        flower.style.top="-30px";

        flower.style.fontSize=
        (18+Math.random()*18)+"px";

        flower.style.opacity=.9;

        flower.style.pointerEvents="none";

        flower.style.transition=
        "transform 8s linear, top 8s linear";

        sakuraContainer.appendChild(flower);

        requestAnimationFrame(()=>{

            flower.style.top=
            window.innerHeight+50+"px";

            flower.style.transform=
            `translateX(${Math.random()*250-125}px)
             rotate(${Math.random()*720}deg)`;

        });

        setTimeout(()=>{

            flower.remove();

        },8000);

    },900);

}

createSakura();


/*==============================
        HEART BURST
==============================*/

function heartBurst(){

    for(let i=0;i<25;i++){

        const heart=
        document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=
        window.innerWidth/2+"px";

        heart.style.top=
        window.innerHeight/2+"px";

        heart.style.fontSize=
        (20+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heartContainer.appendChild(heart);

        requestAnimationFrame(()=>{

            const x=
            (Math.random()-.5)*500;

            const y=
            (Math.random()-.5)*500;

            heart.style.transition=
            "all 2s ease-out";

            heart.style.transform=
            `translate(${x}px,${y}px)
             scale(.5)`;

            heart.style.opacity=0;

        });

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

}
/*====================================================
            I'M SORRY PROJECT
            PART 2
====================================================*/


/*==============================
        ELEMENT - SCENE 2
==============================*/

const openLetter =
document.getElementById("openLetter");

const letterText =
document.getElementById("letterText");

const next2 =
document.getElementById("next2");


/*==============================
        ELEMENT - SCENE 3
==============================*/

const repairHeart =
document.getElementById("repairHeart");

const brokenHeart =
document.getElementById("brokenHeart");


/*==============================
        ELEMENT - SCENE 4
==============================*/

const openGift =
document.getElementById("openGift");

const gift =
document.getElementById("gift");

const giftMessage =
document.getElementById("giftMessage");

const finish =
document.getElementById("finish");


/*==============================
        DEFAULT
==============================*/

letterText.style.display = "none";
next2.style.display = "none";

giftMessage.style.display = "none";
finish.style.display = "none";


/*==============================
        LETTER CONTENT
==============================*/

const paragraphs =
letterText.querySelectorAll("p");

paragraphs.forEach(p=>{

    p.style.display="none";

});

const lastTitle =
letterText.querySelector("h2");

lastTitle.style.display="none";


/*==============================
        OPEN LETTER
==============================*/

openLetter.addEventListener("click",()=>{

    openLetter.disabled=true;

    const envelope =
    document.querySelector(".envelope");

    envelope.style.transform =
    "rotate(-8deg) scale(1.08)";

    envelope.style.boxShadow =
    "0 25px 45px rgba(255,120,180,.45)";

    letterText.style.display="block";

    let index=0;

    function showNext(){

        if(index < paragraphs.length){

            paragraphs[index].style.display="block";

            paragraphs[index].animate(

                [

                    {
                        opacity:0,
                        transform:"translateY(25px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],

                {

                    duration:700,
                    easing:"ease"

                }

            );

            index++;

            setTimeout(showNext,900);

        }

        else{

            lastTitle.style.display="block";

            lastTitle.animate(

                [

                    {
                        opacity:0,
                        transform:"scale(.7)"
                    },

                    {
                        opacity:1,
                        transform:"scale(1)"
                    }

                ],

                {

                    duration:800

                }

            );

            heartBurst();

            next2.style.display="inline-block";

        }

    }

    showNext();

});


/*==============================
        NEXT
==============================*/

next2.addEventListener("click",()=>{

    scene2.classList.add("hidden");

    scene3.classList.remove("hidden");

});


/*==============================
        REPAIR HEART
==============================*/

repairHeart.addEventListener("click",()=>{

    repairHeart.disabled=true;

    brokenHeart.innerHTML="❤️";

    brokenHeart.animate(

        [

            {
                transform:"scale(.7)"
            },

            {
                transform:"scale(1.3)"
            },

            {
                transform:"scale(1)"
            }

        ],

        {

            duration:900

        }

    );

    heartBurst();

    setTimeout(()=>{

        scene3.classList.add("hidden");

        scene4.classList.remove("hidden");

    },1500);

});


/*==============================
        OPEN GIFT
==============================*/

openGift.addEventListener("click",()=>{

    openGift.disabled=true;

    gift.animate(

        [

            {
                transform:"translateY(0)"
            },

            {
                transform:"translateY(-18px)"
            },

            {
                transform:"translateY(0)"
            }

        ],

        {

            duration:700

        }

    );

    setTimeout(()=>{

        giftMessage.style.display="block";

        giftMessage.animate(

            [

                {
                    opacity:0,
                    transform:"translateY(35px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],

            {

                duration:800

            }

        );

        heartBurst();

        finish.style.display="inline-block";

    },700);

});


/*==============================
        FINISH
==============================*/

finish.addEventListener("click",()=>{

    scene4.classList.add("hidden");

    ending.classList.remove("hidden");

    heartBurst();

});
/*====================================================
            I'M SORRY PROJECT
            PART 3 (FINAL)
====================================================*/


/*==============================
        ENDING EFFECT
==============================*/

function endingEffect(){

    document.body.animate(

        [

            {
                background:
                "linear-gradient(180deg,#fff9fb,#ffe8ef,#ffd9e6)"
            },

            {
                background:
                "linear-gradient(180deg,#fffefc,#fff5ef,#fff0f6)"
            }

        ],

        {

            duration:2500,
            fill:"forwards"

        }

    );

}


/*==============================
        BIG HEART RAIN
==============================*/

function bigHeartRain(){

    let total = 60;

    for(let i=0;i<total;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=
        Math.random()*window.innerWidth+"px";

        heart.style.top="-50px";

        heart.style.fontSize=
        (18+Math.random()*32)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="999";

        heartContainer.appendChild(heart);

        requestAnimationFrame(()=>{

            heart.style.transition=
            (4+Math.random()*3)+"s linear";

            heart.style.transform=
            `translateY(${window.innerHeight+120}px)
             rotate(${Math.random()*720}deg)`;

            heart.style.opacity=0;

        });

        setTimeout(()=>{

            heart.remove();

        },7000);

    }

}


/*==============================
        EXTRA SAKURA
==============================*/

function sakuraExplosion(){

    for(let i=0;i<45;i++){

        const flower =
        document.createElement("div");

        flower.innerHTML="🌸";

        flower.style.position="fixed";

        flower.style.left=
        window.innerWidth/2+"px";

        flower.style.top=
        window.innerHeight/2+"px";

        flower.style.fontSize=
        (18+Math.random()*20)+"px";

        flower.style.pointerEvents="none";

        sakuraContainer.appendChild(flower);

        requestAnimationFrame(()=>{

            const x=
            (Math.random()-.5)*700;

            const y=
            (Math.random()-.5)*700;

            flower.style.transition=
            "3s ease-out";

            flower.style.transform=
            `translate(${x}px,${y}px)
             rotate(${Math.random()*720}deg)`;

            flower.style.opacity=0;

        });

        setTimeout(()=>{

            flower.remove();

        },3000);

    }

}


/*==============================
        ENDING EVENT
==============================*/

finish.addEventListener("click",()=>{

    endingEffect();

    bigHeartRain();

    sakuraExplosion();

});


/*==============================
        SMALL SPARKLE
==============================*/

function sparkle(){

    setInterval(()=>{

        const star =
        document.createElement("div");

        star.innerHTML="✨";

        star.style.position="fixed";

        star.style.left=
        Math.random()*window.innerWidth+"px";

        star.style.top=
        Math.random()*window.innerHeight+"px";

        star.style.fontSize=
        (12+Math.random()*12)+"px";

        star.style.opacity=.8;

        star.style.pointerEvents="none";

        document.body.appendChild(star);

        star.animate(

            [

                {
                    opacity:0,
                    transform:"scale(.3)"
                },

                {
                    opacity:1,
                    transform:"scale(1)"
                },

                {
                    opacity:0,
                    transform:"scale(.2)"
                }

            ],

            {

                duration:1800

            }

        );

        setTimeout(()=>{

            star.remove();

        },1800);

    },500);

}

sparkle();


/*==============================
        CONSOLE
==============================*/

console.log(

"%c💖 I'M SORRY PROJECT READY 💖",

"color:#ff4f8b;font-size:20px;font-weight:bold;"

);