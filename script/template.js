function generateCircleSVG() {
    const svgCode = `
        <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#00B0EF" stroke-width="10" fill="none">
                <animate attributeName="stroke-dasharray" from="0, 251.2" to="251.2, 0" dur="200ms" />
            </circle>
        </svg>
    `;
    return svgCode.trim();
}

/**
 * Generiert den SVG-Code für ein animiertes Kreuz.
 * @returns {string} - Der HTML-String für das Kreuz-SVG.
 */

function generateCrossSVG() {
    const svgCode = `
        <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="15" y1="15" x2="85" y2="85" stroke="#FFC000" stroke-width="10" stroke-linecap="round">
                 <animate attributeName="stroke-dasharray" from="0, 99" to="99, 0" dur="200ms" />
            </line>
            <line x1="85" y1="15" x2="15" y2="85" stroke="#FFC000" stroke-width="10" stroke-linecap="round">
                 <animate attributeName="stroke-dasharray" from="0, 99" to="99, 0" dur="200ms" />
            </line>
        </svg>
    `;
    return svgCode.trim();
}