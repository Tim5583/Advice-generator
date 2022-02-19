const adviceIdEle = document.querySelector(".advice_id");
const adviceTextEle = document.querySelector(".advice_text");
const nextBtn = document.getElementById("next");
let randomNumber = Math.floor(Math.random() * 224);
let adviceText;
let adviceId;

nextBtn.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 224);
    getData(randomNumber);
});


function getData(id) {
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then(res => res.json())
    .then(data => {
        adviceText = data.slip.advice;
        adviceId = data.slip.id;
        adviceIdEle.innerHTML = `ADVICE ${adviceId}`;
        adviceTextEle.innerHTML = `"${adviceText}"`;
    })
    .catch((err) => {
        adviceId = "##";
        adviceText = "Sorry! Something Went Wrong <br> Try Again Later!!"
    });
}

getData(randomNumber);
