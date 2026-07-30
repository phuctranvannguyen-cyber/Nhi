const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const textQuestion = document.getElementById('textQuestion');
const cardIcon = document.getElementById('cardIcon');
const btnContainer = document.querySelector('.btn-container');

let clickCount = 0;
const trollTexts = [
    "Ơ kìa bấm 'Có chứ' đi chứ... 🥺",
    "Nhi đừng bấm nút này nữa mà! 😭",
    "Nút 'Có' to thế kia không bấm ư? 💔",
    "Tớ dỗi thật đấy nhé! 😤",
    "Không trốn nữa, nhưng đố Nhi bấm được! 😜"
];

function runAway() {
    clickCount++;

    if (clickCount >= 6) {
        btnNo.style.display = 'none';
        textQuestion.innerHTML = "Hong cho Nhi bấm 'Không' nữa! <br>Chịu thua tớ chưa, bấm 'Có chứ!' đi nào 🥰";
        cardIcon.innerHTML = "👑✨";
        btnYes.style.transform = "scale(1.5)";
        return;
    }

    // Tăng kích thước nút Có dần dần
    let currentScale = 1 + (clickCount * 0.12);
    btnYes.style.transform = `scale(${currentScale})`;
    
    if(clickCount <= trollTexts.length) {
        textQuestion.innerHTML = trollTexts[clickCount - 1];
    }

    // Tính toán tọa độ ngẫu nhiên an toàn nâng cao
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Khoảng đệm an toàn 40px tránh sát viền màn hình điện thoại
    const padding = 40; 
    const maxX = windowWidth - btnNo.offsetWidth - padding;
    const maxY = windowHeight - btnNo.offsetHeight - padding;

    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);

    // Bắt buộc chuyển sangfixed ngay khi kích hoạt để không bị ảnh hưởng bởi Flexbox ban đầu
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}

// Lắng nghe sự kiện rê chuột (Máy tính)
btnNo.addEventListener('mouseover', runAway);

// Lắng nghe sự kiện chạm (Điện thoại) kèm chống đa điểm
btnNo.addEventListener('touchstart', function(e) {
    e.preventDefault(); 
    runAway();
}, { passive: false });

function loveAccepted() {
    textQuestion.innerHTML = "Tớ biết ngay mà! 🥰<br>Nhắn tin hẹn lịch đi chơi với tớ liền đi nhaaa!";
    cardIcon.innerHTML = "✨💖👩‍❤️‍👨💖✨";
    btnContainer.style.display = 'none';

    const duration = 4000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            return clearInterval(interval);
        }
        createHeartPop();
    }, 60);
}

function createHeartPop() {
    const heart = document.createElement('div');
    heart.classList.add('heart-pop');
    
    const sweetEmojis = ['❤️', '💖', '💝', '🧸', '🌸', '🍭', '✨', '🥰'];
    heart.innerHTML = sweetEmojis[Math.floor(Math.random() * sweetEmojis.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-5vh';
    heart.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2500);
}