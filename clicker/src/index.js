import Data from './data.js'
import UI from './ui.js'
import PubSub from "pubsub-js";


const Clicker = (function () {

    function getNext() {
        const number = Data.next()
        PubSub.publish('next', number)
        return number
    }

    const nextButtonClick = () => {
        const number = Data.next()
        PubSub.publish('next', number)

        return 0
    }

    const start = () => {
        PubSub.subscribe('next', (msg, number) => UI.updateNumberParagraph(number))
        UI.nextButton.addEventListener('click', () => nextButtonClick())

        return 0
    }


    return {
        start,
        getNext
    }
})();


Clicker.start()
