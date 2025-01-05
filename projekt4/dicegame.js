document.getElementById("rollButton").addEventListener("click", function () {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceResult").textContent = `Dobás eredménye: ${diceRoll}`;
});

document.getElementById('open').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); 
});