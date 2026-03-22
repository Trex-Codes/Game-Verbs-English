/* Music.js - Smart Audio Controller */

const audio = document.getElementById("gameMusic");
const audioBtn = document.getElementById("btn_audio");
let isPlaying = false;

/**
 * Common browser-friendly autoplay: 
 * Listen for the FIRST interaction on the document.
 */
function attemptAutoplay() {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            if (audioBtn) audioBtn.innerHTML = "🔊";
            // Remove the listeners after first successful play
            document.removeEventListener('click', attemptAutoplay);
            document.removeEventListener('keydown', attemptAutoplay);
        }).catch(err => {
            console.warn("Autoplay still blocked, waiting for more interaction.");
        });
    }
}

// Add listeners for first interaction
document.addEventListener('click', attemptAutoplay);
document.addEventListener('keydown', attemptAutoplay);

if (audio && audioBtn) {
    audioBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // Avoid double triggering the doc click
        if (!isPlaying) {
            audio.play();
            this.innerHTML = "🔊";
            isPlaying = true;
        } else {
            audio.pause();
            this.innerHTML = "🔈";
            isPlaying = false;
        }
    });

    audio.onended = () => {
        audioBtn.innerHTML = "🔈";
        isPlaying = false;
    };
}
