function miniGolfGame() {
    const playerName = prompt("Welcome to GC mini golf! What is your name?");
    const holes = prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`);
    const totalHoles = parseInt(holes);
    const par = totalHoles * 3;
    let score = 0;

    for (let i = 1; i <= totalHoles; i++) {
        const putts = prompt(`How many putts for hole ${i}? (par: 3)`);
        score += parseInt(putts);
    }

    const parDifference = score - par;
    let message;

    if (parDifference === 0) {
        message = `Good game, ${playerName}. Your total par was: 0.`;
    } else if (parDifference < 0) {
        message = `Great job, ${playerName}! Your total par was: ${parDifference}.`;
    } else {
        message = `Nice try, ${playerName}... Your total par was: +${parDifference}.`;
    }

    console.log(message);
}

miniGolfGame();
