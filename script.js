const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate the total price
prices.forEach((price) => {
    total += Number(price.textContent.trim());
});

// Create a new table row
const newRow = document.createElement("tr");

// Create a single cell for the total
const totalCell = document.createElement("td");
totalCell.textContent = total;

// Add the cell to the row
newRow.appendChild(totalCell);

// Add the row to the table
document.querySelector("table").appendChild(newRow);
