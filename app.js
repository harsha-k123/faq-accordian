let answers = document.querySelectorAll(".answer");
let questions = document.querySelectorAll(".question");
let toggleBtns = document.querySelectorAll(".toggle-btn");

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        let answer = answers[index];
        let toggleBtn = toggleBtns[index];

        if (answer.style.display === "block") {
            answer.style.display = "none";
            toggleBtn.src = "/faq-accordion-main/assets/images/icon-plus.svg";
        } else {
            answer.style.display = "block";
            toggleBtn.src = "/faq-accordion-main/assets/images/icon-minus.svg";
        }
    });
});

