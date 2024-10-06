const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

function createGrid(size) {
  // Clear any existing squares
  container.innerHTML = '';
  
  // Calculate the size of each square based on the grid size
  const squareSize = 960 / size;

  // Create grid squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect to change color
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = randomColor();
    });

    container.appendChild(square);
  }
}

// Generate random RGB color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Prompt user for new grid size
resizeButton.addEventListener('click', () => {
  let newSize = parseInt(prompt("Enter new grid size (1-100):"));

  // Validate input and limit the grid size
  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// Create default 16x16 grid on page load
createGrid(16);
