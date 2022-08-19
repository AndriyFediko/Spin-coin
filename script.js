let random;
let time = 0;
let interval;
let spinTimes = 0;
const coin1 = document.querySelector('.coin');
const coin2 = document.querySelector('.coin2');
const description = document.querySelector('.coin-description');
let spinHistory = [];
document.querySelector('.coin-spin-button').onclick = function spinStart() {
    spinTimes++
    document.querySelector('.coin-spin-button').style.display = 'none';
    document.querySelector('.skip-animation-button').style.display = 'block';
    document.querySelector('.startCoin').style.display = 'none';
    coin1.style.display = 'flex';
    coin2.style.display = 'flex';
    random = Math.floor(Math.random() * 1000);
    time = 0;
    lenghtTime();
    interval = setInterval(lenghtTime, 1000);
    if (random > 500) {
        coin1.classList.add('animation1');
        coin2.classList.add('animation2');
    } else if (random < 500) {
        coin1.classList.add('animation2');
        coin2.classList.add('animation1');
    } else {
        coin1.classList.add('animation2');
        coin2.classList.add('sideAnimation');
    }
    saveHistory();
}

function lenghtTime() {
    time++
    if (time == 9 && random > 500) {
        description.textContent = 'Копійка';
        spinHistory.unshift(`${spinTimes}: Копійка`);
    }
    if (time == 9 && random < 500) {
        description.textContent = 'Герб';
        spinHistory.unshift(`${spinTimes}: Герб`);
    }
    if (time == 9 && random == 500) {
        coin1.style.display = 'none';
        coin2.style.display = 'none';
        document.querySelector('.coinWithSideWrap').style.display = 'flex';
        description.textContent = 'Ребро';
        spinHistory.unshift(`${spinTimes}: Ребро`);
    }
    if (time == 9) {
        document.querySelector('.skip-animation-button').style.display = 'none';
        document.querySelector('.restart-btn').style.display = 'block';
        clearInterval(interval);
    }
    saveHistory();
}
document.querySelector('.restart-btn').onclick = function spinRestart() {
    document.querySelector('.startCoin').style.display = 'flex';
    coin1.style.display = 'none';
    coin2.style.display = 'none';
    coin1.classList.remove('animation1');
    coin2.classList.remove('animation2');
    coin1.classList.remove('animation2');
    coin2.classList.remove('animation1');
    description.textContent = '';
    document.querySelector('.coin-spin-button').style.display = 'block';
    document.querySelector('.restart-btn').style.display = 'none';
    document.querySelector('.coinWithSideWrap').style.display = 'none';
    saveHistory();
}
document.querySelector('.skip-animation-button').onclick = function skipAnimation() {
    coin1.classList.remove('animation1');
    coin2.classList.remove('animation2');
    coin1.classList.remove('animation2');
    coin2.classList.remove('animation1');
    time = 9;
    clearInterval(interval);
    if (time == 9 && random > 500) {
        description.textContent = 'Копійка';
        coin2.style.display = 'none';
        spinHistory.unshift(`${spinTimes}: Копійка`);
    }
    if (time == 9 && random < 500) {
        description.textContent = 'Герб';
        coin1.style.display = 'none';
        spinHistory.unshift(`${spinTimes}: Герб`);
    }
    if (time == 9 && random == 500) {
        coin1.style.display = 'none';
        coin2.style.display = 'none';
        document.querySelector('.coinWithSideWrap').style.display = 'flex';
        description.textContent = 'Ребро';
        spinHistory.unshift(`${spinTimes}: Ребро`);
    }
    document.querySelector('.skip-animation-button').style.display = 'none';
    document.querySelector('.restart-btn').style.display = 'block';
    saveHistory();
}

function saveHistory() {
    history__box1.textContent = spinHistory[0];
    history__box2.textContent = spinHistory[1];
    history__box3.textContent = spinHistory[2];
    history__box4.textContent = spinHistory[3];
    history__box5.textContent = spinHistory[4];
    history__box6.textContent = spinHistory[5];
    history__box7.textContent = spinHistory[6];
    history__box8.textContent = spinHistory[7];
    history__box9.textContent = spinHistory[8];
    history__box10.textContent = spinHistory[9];
    history__box11.textContent = spinHistory[10];
    history__box12.textContent = spinHistory[11];
    history__box13.textContent = spinHistory[12];
    history__box14.textContent = spinHistory[13];
    history__box15.textContent = spinHistory[14];
}
cleanHistory.onclick = function cleanHistory() {
    spinHistory = [];
    spinTimes = 0;
    saveHistory();
}
burger__button__active.onclick = function burgerOpen() {
    document.querySelector('.burger').classList.toggle('burger__active');
    arrowSpin();
}

function arrowSpin() {
    arrow.classList.toggle('burger__button__active');
}