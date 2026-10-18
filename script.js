// ❤️ Floating Hearts Animation

const heartsContainer = document.getElementById("heart-explosion");

function createHeart() { if (!heartsContainer) return;
    const heart = document.createElement("div");

    heart.className = "heart";

    const heartEmojis = ["❤️", "💕", "💖", "💗", "💘"];

    heart.textContent =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    const duration = 4 + Math.random() * 5;

    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// setInterval(createHeart, 550);


// 🎂 Kajal's Birthday Countdown
// Birthday: 19 October every year

function updateCountdown() {

    const countdownElement = document.getElementById("countdown");
if (!countdownElement) return;

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        9,
        19,
        0, 0, 0
    );

    if (now >= birthday) {
        birthday = new Date(
            now.getFullYear() + 1,
            9,
            19,
            0, 0, 0
        );
    }

    const difference = birthday.getTime() - now.getTime();

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdownElement.innerHTML = `
        <div class="timer-box">
            <span>${days}</span>
            <small>Days</small>
        </div>

        <div class="timer-box">
            <span>${hours}</span>
            <small>Hours</small>
        </div>

        <div class="timer-box">
            <span>${minutes}</span>
            <small>Minutes</small>
        </div>

        <div class="timer-box">
            <span>${seconds}</span>
            <small>Seconds</small>
        </div>
    `;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// 💌 Romantic Surprise

function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.innerHTML = `
        💖 My Dearest Kajal 💖<br><br>

        You are one of the most special people in my life.
        Your smile brings happiness, and your presence makes
        ordinary moments beautiful. ❤️<br><br>

        On your birthday, I wish you endless happiness,
        success, good health, and lots of love. 🌹<br><br>

        Happy Birthday, My Love! 🎂<br><br>

        Forever Yours,<br>
        Ankit ❤️
    `;

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
// ===== Welcome Surprise Button =====

document.addEventListener("DOMContentLoaded", function () {
    const openSurpriseButton = document.getElementById("open-surprise");
    const welcomeScreen = document.getElementById("welcome-screen");

    if (openSurpriseButton && welcomeScreen) {
        openSurpriseButton.addEventListener("click", function () {
            // 🎵 Start romantic music when the button is clicked
            const romanticAudio = document.getElementById("romantic-audio");

            if (romanticAudio && romanticAudio.paused) {
                romanticAudio.play().catch(function (error) {
                    console.log("Music could not start:", error);
                });
            }

            // ❤️ Hide the welcome screen
            welcomeScreen.classList.add("hide");

            setTimeout(function () {
                welcomeScreen.style.display = "none";
            }, 800);
        });
    } else {
        console.error("Welcome button or welcome screen not found.");
    }
});

// ===== Secret Love Letter + Heart Explosion =====

const letterButton = document.getElementById("love-letter-btn");
const loveLetter = document.getElementById("love-letter");

if (letterButton && loveLetter) {

    letterButton.addEventListener("click", function () {

        loveLetter.classList.toggle("show");

        if (loveLetter.classList.contains("show")) {

            letterButton.textContent = "💗 Close My Heart 💗";

            // Create a burst of hearts ❤️
            for (let i = 0; i < 25; i++) {

                setTimeout(function () {

                    const heart = document.createElement("span");

                    heart.className = "floating-heart";
                    heart.textContent = ["❤️", "💖", "💕", "💗", "💘"][
                        Math.floor(Math.random() * 5)
                    ];

                    heart.style.left = Math.random() * 100 + "vw";
                    heart.style.fontSize =
                        (20 + Math.random() * 25) + "px";

                    document.body.appendChild(heart);

                    setTimeout(function () {
                        heart.remove();
                    }, 3000);

                }, i * 70);
            }

        } else {

            letterButton.textContent = "💖 Open My Heart 💖";

        }

    });

}
document.addEventListener("DOMContentLoaded", function () {
  const letterButton = document.getElementById("love-letter-btn");
const loveLetter = document.getElementById("love-letter");

if (letterButton && loveLetter) {
    letterButton.onclick = function () {
        loveLetter.classList.toggle("show");

        if (loveLetter.classList.contains("show")) {
            letterButton.innerHTML = "💗 Close My Heart 💗";
            loveLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else {
            letterButton.innerHTML = "💖 Open My Heart 💖";
        }
    };
} else {
    console.error("Love Letter button ya section nahi mila!");
}
});


// 🎂 Birthday Cake - Blow Out Candles

document.addEventListener("DOMContentLoaded", function () {

    const blowButton = document.getElementById("blow-candles-btn");
    const birthdayWish = document.getElementById("birthday-wish");
    const birthdayMessage = document.getElementById("birthday-message");

    if (!blowButton || !birthdayWish || !birthdayMessage) {
        console.error("Cake section ke elements nahi mile!");
        return;
    }

    blowButton.onclick = function () {

        // Candles ki flames band karo
        document.querySelectorAll(
            ".birthday-cake-section .flame"
        ).forEach(function (flame) {
            flame.style.display = "none";
        });

        // Button ka text change karo
        blowButton.textContent = "✨ Candles Blown Out! ❤️";
        blowButton.disabled = true;

        // Birthday wish aur message dikhao
        birthdayWish.style.display = "block";
        birthdayMessage.style.display = "block";

        // Hidden class hatao
        birthdayWish.classList.remove("hidden");
        birthdayMessage.classList.remove("hidden");

    };

});


// 🎁 Birthday Gift Box for Kajal

document.addEventListener("DOMContentLoaded", function () {

    const giftButton = document.getElementById("gift-box-btn");
    const giftBox = document.getElementById("gift-box");
    const giftSurprise = document.getElementById("gift-surprise");
    const giftHint = document.querySelector(".gift-hint");

    if (!giftButton || !giftBox || !giftSurprise) {
        console.error("Gift box ke HTML elements nahi mile!");
        return;
    }

    giftButton.addEventListener("click", function () {

     console.log("🎁 Gift Box clicked!");

     console.log(
      "Celebration function:",
      typeof window.startBirthdayCelebration
     );

        if (giftBox.classList.contains("opened")) {
            return;
        }

        giftBox.classList.add("opened");

        giftSurprise.classList.remove("hidden");

       
console.log(
    "Celebration function:",
    typeof window.startBirthdayCelebration
);

// 🎉 Start birthday celebration after opening the gift

setTimeout(function () {
    if (typeof window.startBirthdayCelebration === "function") {
        window.startBirthdayCelebration();
    } else {
        console.error("Birthday celebration function not found!");
    }
}, 500);

        giftHint.textContent = "Your Surprise Is Here! ❤️";

        giftButton.setAttribute("aria-label", "Birthday gift opened");

        giftButton.disabled = true;

        giftSurprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});

// 🎉 Birthday Celebration for Kajal ❤️

document.addEventListener("DOMContentLoaded", function () {

    const celebration = document.getElementById("birthday-celebration");
    const balloonsContainer = document.getElementById("balloons-container");
    const confettiContainer = document.getElementById("confetti-container");
    const celebrateAgainBtn = document.getElementById("celebrate-again-btn");
    const closeCelebrationBtn = document.getElementById("close-celebration-btn");

    let celebrationTimer;

    function startCelebration() {

        if (!celebration || !balloonsContainer || !confettiContainer) {
            console.error("Birthday celebration HTML elements nahi mile!");
            return;
        }

        clearTimeout(celebrationTimer);

        balloonsContainer.replaceChildren();
        confettiContainer.replaceChildren();

        celebration.classList.add("active");

        // 🎈 Floating balloons
        const balloonEmojis = ["🎈", "🎈", "💖", "🎈", "❤️"];

        for (let i = 0; i < 16; i++) {

            const balloon = document.createElement("span");

            balloon.className = "birthday-balloon";

            balloon.textContent =
                balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];

            balloon.style.left = Math.random() * 95 + "%";
            balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
            balloon.style.animationDelay = Math.random() * 2 + "s";

            balloonsContainer.appendChild(balloon);
        }

        // 🎊 Confetti
        const confettiColors = [
            "#ffeb3b",
            "#ff1744",
            "#00e5ff",
            "#76ff03",
            "#ffffff",
            "#ff80ab"
        ];

        for (let i = 0; i < 100; i++) {

            const confetti = document.createElement("span");

            confetti.className = "birthday-confetti";

            confetti.style.left = Math.random() * 100 + "%";
            confetti.style.backgroundColor =
                confettiColors[Math.floor(Math.random() * confettiColors.length)];

            confetti.style.animationDuration = (3 + Math.random() * 4) + "s";
            confetti.style.animationDelay = Math.random() * 2 + "s";

            confettiContainer.appendChild(confetti);
        }

        console.log("Birthday celebration started!");

        celebrationTimer = setTimeout(function () {
            balloonsContainer.replaceChildren();
            confettiContainer.replaceChildren();
        }, 10000);
    }

    function closeCelebration() {

        clearTimeout(celebrationTimer);

        celebration.classList.remove("active");

        balloonsContainer.replaceChildren();
        confettiContainer.replaceChildren();
    }

    // Gift Box ke liye function available karo
    window.startBirthdayCelebration = startCelebration;

    if (celebrateAgainBtn) {
        celebrateAgainBtn.addEventListener("click", startCelebration);
    }

    if (closeCelebrationBtn) {
        closeCelebrationBtn.addEventListener("click", closeCelebration);
    }

    console.log("Birthday celebration code loaded successfully!");

});



// 💌 Open My Heart - Kajal's Secret Letter

document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("love-letter-btn");
    const loveLetter = document.getElementById("love-letter");

    if (!loveButton || !loveLetter) {
        console.error("Love letter elements nahi mile!");
        return;
    }

    loveButton.addEventListener("click", function () {
        loveLetter.classList.add("show");

        loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        loveButton.textContent = "💖 My Heart Is Open 💖";
    });
});

// 🎵 Romantic Music Player for Kajal ❤️

document.addEventListener("DOMContentLoaded", function () {
const audio = document.getElementById("romantic-audio");
const toggleButton = document.getElementById("music-toggle");
const musicDisc = document.querySelector(".music-disc");

if (!audio || !toggleButton) {
    console.log("Music player HTML elements not found.");
    return;
}

function updateMusicButton() {
    if (audio.paused) {
        toggleButton.textContent = "▶";
        toggleButton.setAttribute("aria-label", "Play music");

        if (musicDisc) {
            musicDisc.style.animation = "none";
        }
    } else {
        toggleButton.textContent = "⏸";
        toggleButton.setAttribute("aria-label", "Pause music");

        if (musicDisc) {
            musicDisc.style.animation = "musicSpin 4s linear infinite";
        }
    }
}

// Play / Pause button
toggleButton.addEventListener("click", async function () {
    if (audio.paused) {
        try {
            await audio.play();
        } catch (error) {
            console.log("Audio playback could not start:", error);
        }
    } else {
        audio.pause();
    }

    updateMusicButton();
});

audio.addEventListener("play", updateMusicButton);
audio.addEventListener("pause", updateMusicButton);
audio.addEventListener("ended", updateMusicButton);

// Try autoplay when the page loads
audio.play().catch(function () {
    console.log("Autoplay blocked. Press Play to start the music.");
    updateMusicButton();
});

updateMusicButton();


});

// 🤗 Virtual Hug Surprise for Kajal ❤️
document.addEventListener("DOMContentLoaded", function () {
    const hugButton = document.getElementById("virtual-hug-btn");
    const hugOverlay = document.getElementById("hug-overlay");
    const closeHugButton = document.getElementById("close-hug-btn");

    // Check whether all required elements exist
    if (!hugButton || !hugOverlay || !closeHugButton) {
        console.error("Virtual Hug elements missing. Check the HTML IDs.");
        return;
    }

    // Open Virtual Hug and record the interaction
    hugButton.addEventListener("click", async function () {
        console.log("Original Virtual Hug click handler started ❤️");
        
        hugOverlay.classList.add("active");

        // Save a local record in this browser
        const storageKey = "kajalHugEvents";
        let events = [];

        try {
            events = JSON.parse(
                localStorage.getItem(storageKey) || "[]"
            );

            if (!Array.isArray(events)) {
                events = [];
            }
        } catch (error) {
            events = [];
        }

        events.push({
            event: "virtual_hug_opened",
            time: new Date().toISOString()
        });

        try {
            localStorage.setItem(
                storageKey,
                JSON.stringify(events)
            );
        } catch (error) {
            console.error("Could not save local event:", error);
        }

        // Save the event to Firebase
        try {
            if (!window.db) {
                throw new Error("Firebase database is not initialized.");
            }

            await window.db.collection("hugEvents").add({
                event: "virtual_hug_opened",
                time: firebase.firestore.FieldValue.serverTimestamp()
            });

            console.log("Virtual Hug event saved to Firebase ❤️");
        } catch (error) {
            console.error(
                "Could not save the Firebase event:",
                error
            );
        }
    });

    // Close the Virtual Hug
    closeHugButton.addEventListener("click", function () {
        hugOverlay.classList.remove("active");
    });

    // Close when clicking outside the card
    hugOverlay.addEventListener("click", function (event) {
        if (event.target === hugOverlay) {
            hugOverlay.classList.remove("active");
        }
    });

    // Close with the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hugOverlay.classList.remove("active");
        }
    });
});

