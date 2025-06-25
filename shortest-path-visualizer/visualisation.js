const grid = document.getElementById('grid');
const rows = 20;
const cols = 20;
let cells = [];

function createGrid() {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cells.push(cell);
  }

  // Set start and end points
  cells[0].classList.add('start');
  cells[cells.length - 1].classList.add('end');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualize() {
  let queue = [0];
  let visited = new Set();
  let prev = Array(rows * cols).fill(-1);

  while (queue.length > 0) {
    let current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    if (!cells[current].classList.contains('start') &&
        !cells[current].classList.contains('end')) {
      cells[current].classList.add('visited');
      await sleep(10);
    }

    if (cells[current].classList.contains('end')) break;

    for (let neighbor of getNeighbors(current)) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        if (prev[neighbor] === -1) {
          prev[neighbor] = current;
        }
      }
    }
  }

  // Backtrack to find path
  let current = cells.length - 1;
  while (prev[current] !== -1) {
    current = prev[current];
    if (!cells[current].classList.contains('start')) {
      cells[current].classList.add('path');
      await sleep(20);
    }
  }
}

function getNeighbors(index) {
  const neighbors = [];
  const row = Math.floor(index / cols);
  const col = index % cols;

  const directions = [
    [0, 1], [1, 0], [-1, 0], [0, -1]
  ];

  for (let [dr, dc] of directions) {
    const r = row + dr;
    const c = col + dc;
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      neighbors.push(r * cols + c);
    }
  }

  return neighbors;
}

createGrid();
