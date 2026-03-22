/* Main.js - Refactored Game Logic (Next Gen) */

// verb data
const VERBS = {
    A: ["Buy","Bring","Think","Seek","Fight","Teach","Catch", "Sleep", "Feel", "Keep", "Sweep", "Meet", "Kneel", "Creep", "Weep", "Leave", "Cling", "Sting", "Swing", "Spin", "Stick", "Strike", "Dig", "Hang", "Find",  "Bind","Grind", "Wind", "Unwind", "Unbind", "Hold", "Behold", "Uphold", "Withhold", "Bleed", "Breed", "Feed", "Speed", "Flee","Lead", "Spend", "Send", "Build", "Bend", "Lend", "Say", "Pay", "Lay", "Tell", "Foretell", "Sell", "Stand", "Understand", "Withstand", "Deal", "Lean", "Mean", "Leap", "Win", "Shine", "Bite", "Slide", "Hide", "Light", "Lose", "Shoot", "Shoe", "Sid" , "Spit", "Have", "Make" ,"Read", "Hear" ],
    B: ["Write", "Drive", "Ride", "Rise", "Arise", "Underwrite", "Strive", "Begin", "Drink", "Sing", "Sink", "Swim", "Stink", "Spring", "Shrink", "Ring", "Run", "Speak", "Steal", "Break", "Tread", "Choose", "Freeze", "Wake", "Wear", "Tear", "Swear", "Bear", "Take", "Mistake", "Undertake", "Partake", "Shake", "Get", "Forget", "Give", "Forgive", "Bid", "Forbid", "Eat", "Fall", "know", "Grow", "Blow", "Throw", "Fly", "Draw", "Withdraw", "Come", "Become", "Overcome", "Lie", "Underlie", "Slay", "Be", "See", "Foresee", "Do", "Go", "Undergo", "Overdo", "Outdo", "Forego" ],
    C: ["Let", "Set" ,"Upset", "Wet", "Bet", "Spread", "Sweat", "Beat", "cut", "Shut", "Cost", "Hurt", "Burst", "Put", "Cast", "Broadcast", "Forecast"]
};

// DOM elements
const elements = {
    verbDisplay: document.getElementById('verb'),
    btnReset: document.getElementById('reset'),
    groupBtns: {
        A: document.getElementById('GroupA'),
        B: document.getElementById('GroupB'),
        C: document.getElementById('GroupC')
    },
    playBtns: {
        A: document.getElementById('starGameA'),
        B: document.getElementById('starGameB'),
        C: document.getElementById('starGameC')
    }
};

/**
 * Pronounces a word using the Web Speech API.
 */
function speak(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

/**
 * Handles group selection visibility.
 */
function selectGroup(groupKey) {
    // Hide other groups
    Object.keys(elements.groupBtns).forEach(key => {
        if (key === groupKey) {
            elements.groupBtns[key].style.display = 'none';
            elements.playBtns[key].style.display = 'inherit';
            elements.playBtns[key].style.visibility = 'visible';
        } else {
            elements.groupBtns[key].style.display = 'none';
            elements.groupBtns[key].style.visibility = 'hidden';
        }
    });

    // Animate display
    elements.verbDisplay.classList.add('fade-in');
}

/**
 * Generates and displays a random verb from the given group.
 */
function nextVerb(groupKey) {
    const list = VERBS[groupKey];
    const randomIndex = Math.floor(Math.random() * list.length);
    const word = list[randomIndex];

    // Update display with effect
    elements.verbDisplay.style.opacity = '0';
    setTimeout(() => {
        elements.verbDisplay.innerHTML = word;
        elements.verbDisplay.style.opacity = '1';
        elements.verbDisplay.classList.add('pulse');
        speak(word); // Auto pronounce
    }, 200);

    // Remove animation class after it finishes
    setTimeout(() => {
        elements.verbDisplay.classList.remove('pulse');
    }, 1000);
}

// Event Listeners
Object.keys(elements.groupBtns).forEach(key => {
    elements.groupBtns[key].onclick = () => selectGroup(key);
    elements.playBtns[key].onclick = () => nextVerb(key);
});

elements.btnReset.onclick = () => {
    Object.keys(elements.groupBtns).forEach(key => {
        elements.groupBtns[key].style.display = 'initial';
        elements.groupBtns[key].style.visibility = 'visible';
        elements.playBtns[key].style.display = 'none';
        elements.playBtns[key].style.visibility = 'hidden';
    });
    elements.verbDisplay.innerHTML = "";
    speechSynthesis.cancel(); // Stop talking if we reset
};

console.log("Verb Game Logic Initialized - Ready to Play!");