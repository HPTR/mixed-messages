const randomNum = num => {
    return Math.floor(Math.random()*num);
};

const games = ["Minecraft", "Fortnite", "Hades", "Doom", "Tetris", "Cyberpunk 2077", "Skyrim", "Death Stranding", "Dark Souls"];
const qualities = ["a fantastic", "a great", "a mediocre", "an okay", "a terrible", "an awful", "a boring", "a fun"];
const recommendations = ["You should buy it now!", "Maybe wait until it's on sale.", "Don't waste your money on it.", "It's worth checking out if you're a fan of other games in the genre.", "Buy it if you've always wanted a game to put you to sleep.", "It might be the best game I've ever played.", "It might be the worst game I've ever played."];
const scores = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"]

function createMessage() {
    document.getElementById("review").innerHTML = `${games[randomNum(games.length)]} is ${qualities[randomNum(qualities.length)]} game. ${recommendations[randomNum(recommendations.length)]} I'd give it a solid ${scores[randomNum(scores.length)]}.`
};