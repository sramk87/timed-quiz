const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

const maxHighScore = 3;

finalScore.innerText = mostRecentScore;

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScore.push(score);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(3);

    localStorage.setItem('highScore', JSON.stringify(highScore));
};
