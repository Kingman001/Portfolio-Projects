document.getElementById('quizForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let score = 0;
            if (document.querySelector('input[name="q1"]:checked')?.value === 'a') score++;
            if (document.querySelector('input[name="q2"]:checked')?.value === 'b') score++;
            document.getElementById('quizResult').textContent = `You scored ${score} out of 2.`;
        });