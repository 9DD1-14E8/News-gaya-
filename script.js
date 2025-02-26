// XP प्रोग्रेस बार को बढ़ाने का फंक्शन
function increaseXP() {
    let xp = document.getElementById("xp-bar");
    let creativity = document.getElementById("creativity-bar");
    let focus = document.getElementById("focus-bar");

    let xpWidth = 0;
    let creativityWidth = 0;
    let focusWidth = 0;

    setInterval(() => {
        if (xpWidth < 100) {
            xpWidth += 5;
            xp.style.width = xpWidth + "%";
        }
        if (creativityWidth < 100) {
            creativityWidth += 3;
            creativity.style.width = creativityWidth + "%";
        }
        if (focusWidth < 100) {
            focusWidth += 2;
            focus.style.width = focusWidth + "%";
        }
    }, 1000);
}

// टाइमर को कम करने का फंक्शन
function startTimer(id, time) {
    let timer = document.getElementById(id);
    let [min, sec] = time.split(":").map(Number);

    setInterval(() => {
        if (sec === 0) {
            if (min === 0) {
                min = 10; 
                sec = 59;
            } else {
                min -= 1;
                sec = 59;
            }
        } else {
            sec -= 1;
        }
        timer.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`;
    }, 1000);
}

// "Change Project" बटन की फंक्शनलिटी
document.getElementById("change-project").addEventListener("click", () => {
    let xp = document.getElementById("xp");
    let minXP = document.getElementById("min-xp");
    
    xp.innerText = "25M 10S"; 
    minXP.innerText = "30.00K (Min 50K)";
});

// जब पेज लोड हो, तो इन फंक्शन्स को स्टार्ट करें
window.onload = () => {
    increaseXP();
    startTimer("cipher-timer", "12:33");
    startTimer("combo-timer", "12:41");
};
