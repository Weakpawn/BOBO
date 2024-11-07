// Quotes array for QOQO QUOTE OF THE DAY
const quotes = [
    "Hard days are the best because that's when champions are made!",
    "Push yourself to the limit! You'll be amazed at what you can achieve!",
    "Progress is progress, no matter how small!",
    "Success is the sum of small efforts, repeated day in and day out!",
    "Keep pushing! You've got this!",
    "If it doesn't challenge you, it won't change you!",
    "One thing about championship teams is that they're resilient. No matter what is thrown at them, they find a way to bounce back and overcome adversity.",
    "Courage doesn't mean you don't get afraid. It means you don't let fear stop you!",
    "The difference between the impossible and the possible lies in determination!",
    "Today I will do what others won't, so tomorrow I can accomplish what others can't!",
    "The only one who can tell you that you can’t win is yourself and you don’t have to listen!",
    "The five S’s of sports training are: stamina, speed, strength, skill, and spirit; but the greatest of these is spirit!",
    "You were born to be a player. You were meant to be here. This moment is yours!",
    "Dream as big as you can dream, and anything is possible!"
];

// Display a random quote on page load
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];
document.getElementById("quote").innerText = randomQuote;

let starCount = 0;

function submitProgress() {
    const rowsCompleted = document.getElementById("rows-completed").value;
    const liftChecked = document.getElementById("lift").checked;
    const recoveryChecked = document.getElementById("recovery").checked;

    // Determine star message
    let starMessage = '';
    if (liftChecked && recoveryChecked && rowsCompleted > 0) {
        starMessage = '<span style="color: gold;">⭐️ GREAT JOB BOBOBOBO!!!! YOU ARE SO OP AF!!!!</span>';
    } else {
        starMessage = '<span style="color: black;"> KEEP PUSHING BOBOBO! I BELIEVE IN YOU🤩!</span>';
    }

    // Build the content to replace the progress section with
    const progressContent = `
        <div class="progress-message" style="color: #DE3163;">
            Rows Completed: ${rowsCompleted}<br>
            Lifting Today: ${liftChecked ? 'Yes' : 'No'}<br>
            Recovery Techniques: ${recoveryChecked ? 'Yes' : 'No'}<br><br>
            ${starMessage}
        </div>
    `;

    // Replace the progress section with the new content
    document.getElementById("progress-section").innerHTML = progressContent;

    // Display the star count in the star-count div
    document.getElementById("star-count").innerText = `⭐️ ${starCount.toFixed(1)}`;
}
