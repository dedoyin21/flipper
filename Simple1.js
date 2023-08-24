const colors = ["yellow", "orange", "purple",  "RGB(128, 128, 128]", "RGB(255, 192, 203)",  "RGB(165, 42, 42)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const spanText = document.querySelector(".color");

btn.addEventListener("click", function () {
//get random number between 0 - 5
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



