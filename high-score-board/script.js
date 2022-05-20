// Exercism - High Score Board

//  Task 1 - reate a new high score board

function createScoreBoard() {
    let highScoreBoard =  {
        'The Best Ever': 1000000,
    };
    return highScoreBoard;
}

//  Task 2 - Add players to a score board

function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
}

// Task 3 - Remove players from a score board

function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
}

// Task 4 - Increase a player's score

function updateScore(scoreBoard, player, points) {
    scoreBoard[player] = scoreBoard[player] + points;
    return scoreBoard;
}

// Task 5 - Apply Monday bonus points

function applyMondayBonus(scoreBoard) {
    for (let player in scoreBoard) {
      scoreBoard[player] = scoreBoard[player] + 100;
    }
    return scoreBoard;
}

//  Task 6 - Normalize a high score

function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}