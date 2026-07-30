* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%);
    font-family: 'Comfortaa', 'Segoe UI', Roboto, sans-serif;
    overflow: hidden;
    position: relative;
}

/* Khối hộp quà 3D Soft-Clay */
.card-3d {
    background: #ffffff;
    padding: 50px 40px;
    border-radius: 35px;
    /* Đổ bóng dạng clay mềm mại */
    box-shadow: 
        inset 0 -8px 0px rgba(255, 182, 193, 0.4),
        0 20px 40px rgba(255, 105, 180, 0.15);
    text-align: center;
    max-width: 90%;
    width: 440px;
    z-index: 10;
    border: 4px solid #fff;
    transform: scale(1);
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-3d:hover {
    transform: scale(1.02);
}

/* Emoji nhảy nhót */
.emoji-pan {
    font-size: 65px;
    margin-bottom: 20px;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(5deg); }
}

/* Tiêu đề chữ màu Gradient lấp lánh */
.gradient-title {
    font-size: 26px;
    background: linear-gradient(45deg, #ff416c, #ff4b2b, #ff69b4);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s linear infinite;
    font-weight: 800;
    margin-bottom: 40px;
    line-height: 1.5;
}

@keyframes shine {
    to { background-position: 200% center; }
}

/* Container nút bấm */
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    min-height: 80px;
    position: relative;
}

/* Phong cách nút bấm 3D như viên kẹo */
.btn {
    padding: 14px 32px;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-yes {
    background: linear-gradient(135deg, #ff758f 0%, #ff4d6d 100%);
    color: white;
    box-shadow: 0 6px 0 #c9184a, 0 12px 20px rgba(255, 77, 109, 0.4);
}

.btn-yes:active {
    box-shadow: 0 2px 0 #c9184a, 0 4px 10px rgba(255, 77, 109, 0.4);
    transform: translateY(4px);
}

.btn-no {
    background: #f0f0f0;
    color: #888;
    box-shadow: 0 6px 0 #d0d0d0, 0 12px 20px rgba(0,0,0,0.05);
    /* Lướt đi trong 5 giây theo yêu cầu trước đó của bạn */
    transition: left 5s ease-out, top 5s ease-out, background-color 0.3s, transform 0.2s;
}

/* Trái tim lấp lánh bay lên */
.heart-pop {
    position: absolute;
    font-size: 30px;
    animation: flyUp 2.5s forwards cubic-bezier(0.1, 0.8, 0.3, 1);
    pointer-events: none;
    z-index: 5;
}

@keyframes flyUp {
    0% {
        transform: translateY(0) scale(0.3) rotate(0deg);
        opacity: 0;
    }
    15% { opacity: 1; }
    100% {
        transform: translateY(-100vh) scale(1.6) rotate(180deg);
        opacity: 0;
    }
}
