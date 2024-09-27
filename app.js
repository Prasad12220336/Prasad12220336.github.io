function showAnswers(week) {
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = ""; // Clear previous answers

    let questions = {
        1: ["Question 1.1", "Question 1.2"],
        2: ["Question 2.1", "Question 2.2"],
        // Add more questions as needed
    };

    questions[week].forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${question}</p>`;
        const answerButton = document.createElement("button");
        answerButton.innerHTML = "Show Answer";
        answerButton.onclick = () => {
            const answerBox = document.createElement("div");
            answerBox.classList.add("answer-box");
            answerBox.innerText = `Answer for ${question}`; // You can customize this for each question
            answerBox.style.display = 'block'; // Show the answer box
            questionElement.appendChild(answerBox);
        };
        questionElement.appendChild(answerButton);
        answersDiv.appendChild(questionElement);
    });
}
