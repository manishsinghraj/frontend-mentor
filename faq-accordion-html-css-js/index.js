document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.src = './assets/images/icon-plus.svg';
                icon.alt = "plus-icon";
            } else {
                answer.style.display = 'block';
                icon.src = './assets/images/icon-minus.svg';
                icon.alt = "minus-icon";
            }
        });
    });
});

/*For smooth transition of answer
.answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
}

*/

// document.addEventListener('DOMContentLoaded', () => {
//     const questions = document.querySelectorAll('.question');
//     questions.forEach(question => {
//         question.addEventListener('click', () => {
//             const answer = question.nextElementSibling;
//             const icon = question.querySelector('.icon');

//             if (answer.style.maxHeight) {
//                 answer.style.maxHeight = null;
//                 answer.style.padding = null;
//                 icon.src = './assets/images/icon-plus.svg';
//             } else {
//                 answer.style.maxHeight = answer.scrollHeight + 10 + 'px';
//                 answer.style.padding = '10px 0';
//                 icon.src = './assets/images/icon-minus.svg';
//             }
//         });
//     });
// });
