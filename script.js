document.addEventListener('DOMContentLoaded', function () {
  const facts = [
    {
      question: "How many days does period poverty cause a girl to miss school each month?",
      answer: "On average, girls affected by period poverty miss 4–5 days of school every month."
    },
    {
      question: "How many girls worldwide miss school due to period poverty?",
      answer: "Over 500 million girls and women lack access to menstrual hygiene, leading millions to miss school."
    },
    {
      question: "How many girls drop out of school because of missed days?",
      answer: "In some regions, up to 1 in 5 girls drop out of school due to ongoing absences caused by period poverty."
    },
    {
      question: "How many girls are married because of period poverty?",
      answer: "In certain developing countries, families unable to afford menstrual products sometimes marry off daughters early to reduce financial burden."
    },
    {
      question: "How many opportunities are lost due to school absence?",
      answer: "Missed school days mean missed exams, scholarships, sports, and leadership opportunities — limiting their future."
    }
  ];

  let currentIndex = 0;
  let showAnswer = false;

  const button = document.getElementById('nextQuestionBtn');
  const display = document.getElementById('factDisplay');

  if (button && display) {
    // Show first question initially
    button.textContent = "Click to see the answer";
    display.textContent = facts[currentIndex].question;

    button.addEventListener('click', function () {
      display.classList.remove('fade-in');
      void display.offsetWidth; // Trigger reflow

      if (!showAnswer) {
        // Show the answer
        display.textContent = facts[currentIndex].answer;
        button.textContent = "Next question";
        showAnswer = true;
      } else {
        // Move to next question
        currentIndex = (currentIndex + 1) % facts.length;
        display.textContent = facts[currentIndex].question;
        button.textContent = "Click to see the answer";
        showAnswer = false;
      }

      display.classList.add('fade-in');
    });
  }
});






