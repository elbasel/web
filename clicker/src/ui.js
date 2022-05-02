import('./index.css')

const UI = (function() {
    const numberParagraph = document.querySelector('p')
    const nextButton = document.querySelector('button')


    function updateNumberParagraph(newNumber) {
        numberParagraph.textContent = newNumber;
    }

    return {
        nextButton,
        updateNumberParagraph
    }

})();


export default UI;
