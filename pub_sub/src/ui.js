import('./index.css')

const UI = (function() {
    const numberParagraph = document.querySelector('p')


    function updateNumberParagraph(newNumber) {
        numberParagraph.textContent = newNumber;
    }

})();


export default UI;
