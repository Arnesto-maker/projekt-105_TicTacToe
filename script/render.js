
function render() {
    const contentDiv = document.querySelector('.row-cols-3');
    const playerTurnDiv = document.getElementById('player-turn-display');
    contentDiv.innerHTML = ''; // Leere das Spielfeld vor dem Neuzeichnen
    // 1. Rendere die Anzeige, welcher Spieler am Zug ist
    if (!gameOver) {
        playerTurnDiv.innerHTML = `
            <span>Spieler am Zug:</span>
            ${currentPlayerSymbol === 'cross' ? generateCrossSVG() : generateCircleSVG()}
        `;
    }
    // 2. Rendere das Spielfeld
        renderGamefeld();
}

function renderGamefeld() {
        const contentDiv = document.querySelector('.row-cols-3');
        contentDiv.innerHTML = '';
        for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        let cellContent = '';
        if (field === 'circle') {
            cellContent = generateCircleSVG();
        } else if (field === 'cross') {
            cellContent = generateCrossSVG();
        }
        const colClasses = ['col'];
        addColClasses(colClasses, i);
        addOnclickHandler(i,contentDiv, cellContent, colClasses);
    }
}
function addOnclickHandler(i,contentDiv, cellContent, colClasses) {
    const cellDiv = document.createElement('div');
    cellDiv.className = colClasses.join(' ');
    cellDiv.id = i;
    cellDiv.innerHTML = cellContent;
    cellDiv.setAttribute('onclick', `handleCellClick(${i})`);
    contentDiv.appendChild(cellDiv);
}
function addColClasses(colClasses, i) {
    if (i < 6) colClasses.push('bottom');
    if (i % 3 === 0 || i % 3 === 1) colClasses.push('right');
    if ([0, 3, 6].includes(i)) colClasses.push('columnHeight');
}