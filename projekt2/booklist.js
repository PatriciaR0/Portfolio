const bookList = document.getElementById("book-table");
const addRowButton = document.getElementById("add-row");
let rowCount = 1;

function createRow() {
    const row = document.createElement("tr");

    const rowCountTd = document.createElement("td");
    rowCountTd.textContent = rowCount;
    row.appendChild(rowCountTd);
    rowCount++;

    const authorCell = document.createElement("td");
    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.placeholder = "Könyv írója és neve";
    authorCell.appendChild(authorInput);
    row.appendChild(authorCell);

    const startDateCell = document.createElement("td");
    const startDateInput = document.createElement("input");
    startDateInput.type = "date";
    startDateCell.appendChild(startDateInput);
    row.appendChild(startDateCell);

    const endDateCell = document.createElement("td");
    const endDateInput = document.createElement("input");
    endDateInput.type = "date";
    endDateCell.appendChild(endDateInput);
    row.appendChild(endDateCell);

    const ratingCell = document.createElement("td");
    const starsDiv = document.createElement("div");
    starsDiv.classList.add("stars");

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        star.dataset.value = i;
        star.innerHTML = "&#9734;"; 
        star.addEventListener("click", () => toggleStar(star));
        starsDiv.appendChild(star);
    }

    ratingCell.appendChild(starsDiv);
    row.appendChild(ratingCell);

    const commentCell = document.createElement("td");
    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Írj megjegyzést";
    commentCell.appendChild(commentInput);
    row.appendChild(commentCell);

    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => row.remove());
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    bookList.appendChild(row);
}

function toggleStar(star) {
    const allStars = star.parentElement.querySelectorAll(".star");
    const value = parseInt(star.dataset.value);

    allStars.forEach(s => {
        if (parseInt(s.dataset.value) <= value) {
            s.classList.add("selected");
        } else {
            s.classList.remove("selected");
        }
    });
}

addRowButton.addEventListener("click", () => {
    createRow();
});

document.getElementById('open').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); 
});

createRow();