function render() {
    // Hole den Container, der die Zellen enthält
    const contentDiv = document.querySelector('.row-cols-3');

    // Erstelle die Tabelle (Zellen)
    let html = '';
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        let cellContent = '';

        if (field === 'circle') {
            cellContent = generateCircleSVG();
        } else if (field === 'cross') {
            cellContent = generateCrossSVG();
        }
        
        // Füge die entsprechende Klasse für die Ränder hinzu, basierend auf der Zellposition
        const colClasses = ['col'];
        if (i < 6) colClasses.push('bottom');
        if (i % 3 === 0 || i % 3 === 1) colClasses.push('right');
        if ([0, 3, 6].includes(i)) colClasses.push('columnHeight');


        // Hinweis: Die Klassen `left`, `top` aus deiner CSS sind hier nicht notwendig,
        // da `right` und `bottom` ausreichen, um das Gitter zu erstellen.
        
        html += `<div class="${colClasses.join(' ')}" id="${i}">${cellContent}</div>`;
    }

    // Setze den generierten HTML-Code in den Container
    contentDiv.innerHTML = html;
}

// Optional: Teste die Funktion, indem du das 'fields'-Array änderst und render() aufrufst
// fields[0] = 'circle';
// fields[1] = 'cross';
// fields[4] = 'circle';

// render(); // Rufe die Funktion auf, um das Spielfeld initial zu zeichnen.
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
    for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        let cellContent = '';

        if (field === 'circle') {
            cellContent = generateCircleSVG();
        } else if (field === 'cross') {
            cellContent = generateCrossSVG();
        }
        
        const colClasses = ['col'];
        if (i < 6) colClasses.push('bottom');
        if (i % 3 === 0 || i % 3 === 1) colClasses.push('right');
        if ([0, 3, 6].includes(i)) colClasses.push('columnHeight');
        
        // WICHTIG: Füge den onclick-Handler hinzu, der unsere neue Funktion aufruft
        const cellDiv = document.createElement('div');
        cellDiv.className = colClasses.join(' ');
        cellDiv.id = i;
        cellDiv.innerHTML = cellContent;
        cellDiv.setAttribute('onclick', `handleCellClick(${i})`);
        contentDiv.appendChild(cellDiv);
    }
}
