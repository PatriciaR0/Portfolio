const christmasDate = new Date("December 25, 2025 00:00:00").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = christmasDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-day").innerHTML = days + " nap ";
    document.getElementById("timer-hour").innerHTML = hours + " óra ";
    document.getElementById("timer-minute").innerHTML = minutes + " perc ";
    document.getElementById("timer-second").innerHTML = seconds + " másodperc";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Boldog Karácsonyt!";
    }
}, 1000);

document.getElementById('open').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');  
});
