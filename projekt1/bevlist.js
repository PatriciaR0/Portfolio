const shoppingList = document.getElementById("shopping-list");
const addRowButton = document.getElementById("add-row");
const sortByStoreButton = document.getElementById("sort-by-store");
const sortByCompletionButton = document.getElementById("sort-by-completion");

function createRow() {
    const row = document.createElement("tr");

    const storeCell = document.createElement("td");
    const storeInput = document.createElement("input");
    storeInput.type = "text";
    storeInput.placeholder = "Bolt neve";
    storeCell.appendChild(storeInput);
    row.appendChild(storeCell);

    const productCell = document.createElement("td");
    const productInput = document.createElement("input");
    productInput.type = "text";
    productInput.placeholder = "Termék neve";
    productCell.appendChild(productInput);
    row.appendChild(productCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "🗑️";
    deleteButton.className = "icon-button delete";
    deleteButton.addEventListener("click", () => row.remove());
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    const completeCell = document.createElement("td");
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "✔️";
    completeButton.className = "icon-button complete";
    completeButton.addEventListener("click", () => {
        if (completeButton.innerHTML === "✔️") {
            completeButton.innerHTML = "❌";
        } else {
            completeButton.innerHTML = "✔️";
        }
    });
    completeCell.appendChild(completeButton);
    row.appendChild(completeCell);

    shoppingList.appendChild(row);
}

addRowButton.addEventListener("click", createRow);

sortByStoreButton.addEventListener("click", () => {
    const rows = Array.from(shoppingList.querySelectorAll("tr"));
    rows.sort((a, b) => {
        const storeA = a.querySelector("td:first-child input").value.toLowerCase();
        const storeB = b.querySelector("td:first-child input").value.toLowerCase();
        return storeA.localeCompare(storeB);
    });
    rows.forEach(row => shoppingList.appendChild(row));
});

document.getElementById('open').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');  
});



document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("icon");
    const sidebar = document.getElementById("sidebar");
    const menuItems = document.querySelectorAll(".menu-item");
  
    icon.addEventListener("click", () => {
      sidebar.classList.toggle("visible");
      sidebar.classList.toggle("hidden");
    });
  
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        const url = item.getAttribute("data-url");
        if (url) {
          window.location.href = url; 
        }
      });
    });
  });




createRow();