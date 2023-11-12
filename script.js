const dateString = "2023-12-31";

const dateParts = dateString.split("-");

const year = parseInt(dateParts[0]);
const month = parseInt(dateParts[1]) - 1;
const day = parseInt(dateParts[2]);

const countDownDate = new Date(year, month, day).getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML = `${days} суток, ${hours} часов, ${minutes} минут`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Время истекло!";
    }
}, 1000);
