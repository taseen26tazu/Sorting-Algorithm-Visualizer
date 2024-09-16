

let array = [];
const arrayContainer = document.getElementById('array-container');
/*
function drawArray() {
    arrayContainer.innerHTML = ''; // Clear the container
    array.forEach(value => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = getRandomColor();
        
        // Adjust the height based on the value
        const maxHeight = 400; // Maximum height of the container
        const scaleFactor = maxHeight / 100; // Assuming values are between 1 and 100
        circle.style.height = `${value * scaleFactor}px`; // Set height based on value
        circle.style.transform = `translateY(${maxHeight - (value * scaleFactor)}px)`; // Adjust position
        circle.textContent = value; // Display the value inside the circle
        arrayContainer.appendChild(circle); // Append circle to the container
    });
}*/

function drawArray() {
    arrayContainer.innerHTML = ''; // Clear the container
    array.forEach(value => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = getRandomColor();
        
        // Set a fixed height for debugging
        circle.style.height = '40px'; // Fixed height for visibility
        circle.style.width = '30px'; // Ensure width matches height
        
        // Set the text content inside the circle
        circle.textContent = value; // Display the value inside the circle
        
        // Center the text vertically
        circle.style.display = 'flex';
        circle.style.justifyContent = 'center';
        circle.style.alignItems = 'center';
        
        arrayContainer.appendChild(circle); // Append circle to the container
    });
}




function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomArray() {
    fetch('/randomize')
        .then(response => response.json())
        .then(data => {
            array = data; // Assign the generated array
            drawArray(); // Draw the array in the container
        });
}

function startSelectionSort() {
    executeSort('/selection_sort/' + array.join(','), 'Selection Sort');
}

function startInsertionSort() {
    executeSort('/insertion_sort/' + array.join(','), 'Insertion Sort');
}

function startBubbleSort() {
    executeSort('/bubble_sort/' + array.join(','), 'Bubble Sort');
}

function startMergeSort() {
    executeSort('/merge_sort/' + array.join(','), 'Merge Sort');
}

function startQuickSort() {
    executeSort('/quick_sort/' + array.join(','), 'Quick Sort');
}

function startHeapSort() {
    executeSort('/heap_sort/' + array.join(','), 'Heap Sort');
}

function executeSort(url, sortName) {
    fetch(url)
        .then(response => response.json())
        .then(steps => visualizeSorting(steps, sortName));
}
/*
function visualizeSorting(steps, sortName) {
    let stepIndex = 0;
    const interval = setInterval(() => {
        if (stepIndex < steps.length) {
            array = steps[stepIndex];
            drawArray(); // Refresh the array visualization
            stepIndex++;
        } else {
            clearInterval(interval);
            alert(sortName + " completed!"); // Notify completion
        }
    }, 500); // Slow down the sorting process
}*/

function visualizeSorting(steps, sortName) {
    let stepIndex = 0;
    const interval = setInterval(() => {
        if (stepIndex < steps.length) {
            array = steps[stepIndex];
            drawArray(); // Refresh the array visualization
            stepIndex++;
        } else {
            clearInterval(interval);
            alert(sortName + " completed!"); // Notify completion
        }
    }, 700); // Slow down the sorting process
}


// Initial call to generate a random array
generateRandomArray();