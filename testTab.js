document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-button').addEventListener('click', generateTable);
});

function generateTable() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const tableContainer = document.getElementById('table-container');

    // Clear previous table if any
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    let counter = 0;

    // Create a 2D array to store the table values
    const matrix = Array.from({ length: height }, () => Array(width).fill(null));

    // Fill the matrix according to the specific pattern
    for (let start = 0; start < height; start++) {
        let row = start;
        let col = 0;
        while (row >= 0 && col < width) {
            matrix[row][col] = counter++;
            row--;
            col++;
        }
    }

    for (let start = 1; start < width; start++) {
        let row = height - 1;
        let col = start;
        while (row >= 0 && col < width) {
            matrix[row][col] = counter++;
            row--;
            col++;
        }
    }

    // Generate the table HTML
    matrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.innerText = cell !== null ? cell : '';
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    tableContainer.appendChild(table);
}
