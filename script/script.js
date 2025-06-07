function init() {
    render();
}

/**
 * Initialisiert das Spiel, indem das Spielfeld zum ersten Mal gerendert wird.
 */
function init() {
    render();
}

/**
 * Verarbeitet den Klick auf eine Zelle.
 * @param {number} i - Der Index der angeklickten Zelle (0-8).
 */
function handleCellClick(i) {
    // Verhindere Klicks, wenn das Spiel vorbei ist oder die Zelle bereits belegt ist.
    if (gameOver || fields[i] !== null) {
        return;
    }

    // 1. Setze das Symbol des aktuellen Spielers in das Array.
    fields[i] = currentPlayerSymbol;

    // 2. Wechsle den Spieler für den nächsten Zug.
    currentPlayerSymbol = (currentPlayerSymbol === 'cross') ? 'circle' : 'cross';

    // 3. Rendere das Spielfeld neu, um das neue Symbol und die Spieleranzeige zu zeigen.
    render();
    
    // 4. Prüfe, ob es einen Gewinner oder ein Unentschieden gibt.
    checkWinner();
}

/**
 * Prüft alle Gewinnkombinationen.
 */
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikal
        [0, 4, 8], [2, 4, 6]             // Diagonal
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            gameOver = true;
            const winnerSymbol = fields[a];
            showEndScreen(winnerSymbol);
            return;
        }
    }
    
    // Prüfe auf Unentschieden (wenn alle Felder voll sind und es keinen Gewinner gibt)
    if (!fields.includes(null)) {
        gameOver = true;
        showEndScreen(null); // 'null' signalisiert ein Unentschieden
    }
}

/**
 * Zeigt den Endbildschirm mit dem Gewinner oder einem Unentschieden an.
 * @param {string|null} winner - 'circle', 'cross' oder null für Unentschieden.
 */
function showEndScreen(winner) {
    const statusDiv = document.getElementById('game-status');
    let message = '';
    
    if (winner) {
        message = `Spieler ${winner === 'cross' ? generateCrossSVG() : generateCircleSVG()} hat gewonnen!`;
    } else {
        message = `Unentschieden!`;
    }

    statusDiv.innerHTML = `
        <h2>${message}</h2>
        <button onclick="restartGame()" class="restart-btn">Neustart</button>
    `;

    // Verstecke die Spieler-am-Zug-Anzeige
    document.getElementById('player-turn-display').style.display = 'none';
}

/**
 * Setzt alle Spielvariablen zurück und startet das Spiel neu.
 */
function restartGame() {
    fields = [null, null, null, null, null, null, null, null, null];
    currentPlayerSymbol = 'cross';
    gameOver = false;
    
    // Zeige die Spieler-am-Zug-Anzeige wieder an
    document.getElementById('player-turn-display').style.display = 'flex';
    document.getElementById('game-status').innerHTML = ''; // Leere den Status-Container
    
    render();
}


