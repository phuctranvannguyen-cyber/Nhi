// =========================================
// Goodbye Sadness
// Scene 1
// =========================================

const title = document.getElementById("typing-title");
const text = document.getElementById("typing-text");

const startBtn = document.getElementById("start-btn");

const welcome = document.getElementById("welcome");
const scene2 = document.getElementById("scene2");

const sakuraContainer = document.getElementById("sakura-container");
const sparkleContainer = document.getElementById("sparkle-container");


//=========================================
// Typing Effect
//=========================================

const titleText = "Sắp sang tháng mới rồi đấy 🌸";

const messageText =
"Đừng mang nỗi buồn sang tháng mới nữa nhé.\n\nHãy bỏ hết vào chiếc túi nhỏ này...\nĐể mình vứt giúp cậu. 💗";


let titleIndex = 0;
let messageIndex = 0;


function typeTitle(){

    if(titleIndex < titleText.length){

        title.innerHTML += titleText.charAt(titleIndex);

        titleIndex++;

        setTimeout(typeTitle,70);

    }else{

        setTimeout(typeMessage,300);

    }

}


function typeMessage(){

    if(messageIndex < messageText.length){

        const char = messageText.charAt(messageIndex);

        if(char=="\n"){

            text.innerHTML+="<br>";

        }else{

            text.innerHTML+=char;

        }

        messageIndex++;

        setTimeout(typeMessage,35);

    }

}


typeTitle();


//=========================================
// Sakura
//=========================================

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌸";

    petal.style.position="fixed";

    petal.style.left=Math.random()*window.innerWidth+"px";

    petal.style.top="-40px";

    petal.style.fontSize=
    18+Math.random()*16+"px";

    petal.style.pointerEvents="none";

    sakuraContainer.appendChild(petal);

    const x=(Math.random()-0.5)*220;

    const rotate=Math.random()*720;

    const duration=
    5000+Math.random()*4000;

    requestAnimationFrame(()=>{

        petal.style.transition=
        `transform ${duration}ms linear`;

        petal.style.transform=
        `translate(${x}px,${window.innerHeight+120}px)
        rotate(${rotate}deg)`;

    });

    setTimeout(()=>{

        petal.remove();

    },duration);

}


setInterval(createPetal,250);


//=========================================
// Sparkle
//=========================================

function createSparkle(){

    const dot=document.createElement("div");

    dot.style.position="fixed";

    dot.style.width="6px";

    dot.style.height="6px";

    dot.style.borderRadius="50%";

    dot.style.background="white";

    dot.style.boxShadow="0 0 15px white";

    dot.style.left=
    Math.random()*window.innerWidth+"px";

    dot.style.top=
    Math.random()*window.innerHeight+"px";

    dot.style.opacity=0;

    sparkleContainer.appendChild(dot);

    requestAnimationFrame(()=>{

        dot.style.transition=".8s";

        dot.style.opacity=1;

        dot.style.transform="scale(2)";

    });

    setTimeout(()=>{

        dot.style.opacity=0;

    },500);

    setTimeout(()=>{

        dot.remove();

    },1200);

}


setInterval(createSparkle,180);


//=========================================
// Start Button
//=========================================

startBtn.addEventListener("click",()=>{

    welcome.style.opacity="0";

    welcome.style.transition=".8s";

    setTimeout(()=>{

        welcome.style.display="none";

        scene2.classList.remove("hidden");

        scene2.style.display="flex";

        scene2.style.justifyContent="center";

        scene2.style.alignItems="center";

        scene2.style.height="100vh";

        scene2.animate(

            [

                {

                    opacity:0,

                    transform:"translateY(50px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],

            {

                duration:900,

                easing:"ease-out"

            }

        );

    },700);

});
//========================================
// Scene 2
//========================================

const textarea = document.getElementById("sadness-input");
const counter = document.getElementById("char-count");

const bag = document.getElementById("bag");
const bagBtn = document.getElementById("bag-btn");

let typingTimer;


//=========================
// Character Count
//=========================

if(textarea){

    textarea.addEventListener("input",()=>{

        counter.textContent = textarea.value.length;

    });

}


//=========================
// Bag Breath Animation
//=========================

if(textarea){

    textarea.addEventListener("input",()=>{

        bag.style.transform="scale(1.05)";

        clearTimeout(typingTimer);

        typingTimer=setTimeout(()=>{

            bag.style.transform="scale(1)";

        },180);

    });

}


//=========================
// Tie Bag
//=========================

if(bagBtn){

    bagBtn.addEventListener("click",()=>{

        if(textarea.value.trim()==""){

            alert("💗 Viết một chút tâm sự trước nhé.");

            return;

        }

        bag.animate(

            [

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.12)"

                },

                {

                    transform:"scale(1.05)"

                }

            ],

            {

                duration:700,

                easing:"ease-out"

            }

        );

        bagBtn.innerHTML="💖 Đã buộc túi";

        bagBtn.disabled=true;

        bagBtn.style.opacity=".7";

        setTimeout(()=>{

            alert("✨ Tuyệt lắm!\n\nBây giờ chúng ta sẽ mang chiếc túi này đi bỏ vào thùng rác nhé 💗");

        },900);

    });

}
/*====================================================
                SCENE 3
====================================================*/

const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");

const throwBtn = document.getElementById("throw-btn");
const flyingBag = document.getElementById("flyingBag");
const trash = document.getElementById("trash");
const trashLid = document.querySelector(".trash-lid");


// Sau khi buộc túi xong
if (bagBtn) {

    bagBtn.addEventListener("click", () => {

        setTimeout(() => {

            scene2.style.display = "none";
            scene3.style.display = "flex";
            scene3.classList.remove("hidden");

        }, 1500);

    });

}


// Bỏ túi vào thùng
if (throwBtn) {

    throwBtn.addEventListener("click", () => {

        throwBtn.disabled = true;

        // Mở nắp thùng
        trashLid.style.transform = "rotate(-35deg)";

        // Túi bay
        flyingBag.style.left = "290px";
        flyingBag.style.top = "110px";
        flyingBag.style.transform = "scale(.45) rotate(18deg)";

        // Sau khi tới nơi
        setTimeout(() => {

            flyingBag.style.opacity = "0";

            // Đóng nắp
            trashLid.style.transform = "rotate(0deg)";

            // Rung nhẹ
            trash.animate(

                [
                    { transform: "translateX(0px)" },
                    { transform: "translateX(-6px)" },
                    { transform: "translateX(6px)" },
                    { transform: "translateX(-4px)" },
                    { transform: "translateX(4px)" },
                    { transform: "translateX(0px)" }
                ],

                {
                    duration: 500
                }

            );

            // Chuyển Scene
            setTimeout(() => {

                scene3.style.display = "none";
                scene4.style.display = "flex";
                scene4.classList.remove("hidden");

            }, 900);

        }, 1200);

    });

}
/*====================================================
                SCENE 4 - GIFT
====================================================*/

const openGiftBtn = document.getElementById("openGift");
const giftBox = document.getElementById("giftBox");
const giftLid = document.querySelector(".gift-lid");
const letter = document.getElementById("letter");

if (openGiftBtn) {

    openGiftBtn.addEventListener("click", () => {

        // Khóa nút để tránh bấm nhiều lần
        openGiftBtn.disabled = true;
        openGiftBtn.innerHTML = "💖 Đang mở...";

        // Nắp hộp mở
        giftLid.style.transform =
            "rotate(-120deg) translateY(-20px)";

        // Hộp hơi phóng to
        giftBox.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.08)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 700,
                easing: "ease-out"
            }
        );

        // Hiện thiệp
        setTimeout(() => {

            letter.style.display = "block";

            // Hiệu ứng xuất hiện
            letter.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(60px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 800,
                    easing: "ease-out"
                }
            );

            // Tim bay
            createHeartBurst();

        }, 700);

    });

}


/*====================================================
            HEART BURST
====================================================*/

function createHeartBurst(){

    const container =
        document.getElementById("heart-container");

    for(let i = 0; i < 40; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left =
            (Math.random() * window.innerWidth) + "px";

        heart.style.top =
            (window.innerHeight + 30) + "px";

        heart.style.fontSize =
            (18 + Math.random() * 22) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        container.appendChild(heart);

        const x =
            (Math.random() - 0.5) * 350;

        const rotate =
            Math.random() * 720;

        const duration =
            3000 + Math.random() * 2000;

        requestAnimationFrame(() => {

            heart.style.transition =
                `all ${duration}ms ease-out`;

            heart.style.transform =
                `translate(${x}px,-${window.innerHeight+250}px)
                 rotate(${rotate}deg)
                 scale(${0.8 + Math.random()})`;

            heart.style.opacity = "0";

        });

        setTimeout(() => {

            heart.remove();

        }, duration);

    }

}