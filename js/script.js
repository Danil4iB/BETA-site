function sayHello() {
    alert("Привет! Это мой первый JavaScript!")
}

function changeWelcomeText() {
    if (document.getElementById("WelcomeText").innerHTML === "Добро пожаловать на мой сайт") {
    document.getElementById("WelcomeText").innerHTML = "Рад видеть тебя на своем сайте!";
    } else {
    document.getElementById("WelcomeText").innerHTML = "Добро пожаловать на мой сайт";
    }
}
function changeBackground() {
    if (document.body.style.backgroundColor === "rgb(223, 243, 255)") {
        document.body.style.backgroundColor = "#39d269";
    } else {
        document.body.style.backgroundColor = "#dff3ff";
    }
}

function toggleHobby() {
    let hobby = document.getElementById("hobbyText");

    if (hobby.style.display === "none") {
        hobby.style.display = "block";
    } else {
        hobby.style.display = "none";
    }
}


