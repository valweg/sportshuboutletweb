
// selecting card elements
let arrivalCard = document.querySelectorAll('.new-arrival-card');

// three cards width including each of their margin right
let move = (arrivalCard[0].offsetWidth + 20) * 3;

// slide three cards in every 3 seconds
let newArrival = setInterval(() => {
    if (move >= ((arrivalCard[0].offsetWidth + 20) * (arrivalCard.length / 2))) {
        move = 0;
    }

    for (let i = 0; i < arrivalCard.length; i++) {
        arrivalCard[i].style.transform = `translateX(-${move}px)`;
    }

    move += (arrivalCard[0].offsetWidth + 20) * 3;

}, 3000);