function showScreen(num) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById("screen" + num).classList.remove("hidden");
}

function runAway(btn) {
    const x = Math.random() * 250 - 150;
    const y = Math.random() * 250 - 150;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

/***************
 ❤️ Romantic Animation
****************/
function startRomanticAnimation(nextScreen) {
    const animBox = document.getElementById("romanticAnimation");
    animBox.classList.remove("hidden");

    let interval = setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 90 + "%";
        heart.style.bottom = "0px";

        animBox.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 200);

    // End animation after 3 seconds
    setTimeout(() => {
        clearInterval(interval);
        animBox.classList.add("hidden");
        showScreen(nextScreen);
    }, 3000);
}
