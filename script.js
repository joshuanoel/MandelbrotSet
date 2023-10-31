window.addEventListener('load', () => {
  const questionContainers = document.querySelectorAll('.questionContainer');

  questionContainers.forEach(questionContainer => {
    questionContainer.addEventListener('click', (event) => {
      // Get the question clicked
      const question = questionContainer.firstElementChild;

      // Disable other questions
      const active = document.querySelector('.question.active');
      if (active && active !== question) {
        active.classList.toggle('active');
        active.nextElementSibling.style.maxHeight = 0;
      }

      // Toggle current question
      question.classList.toggle('active');

      // Toggle answer
      const answer = question.nextElementSibling;
      if (question.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
});
