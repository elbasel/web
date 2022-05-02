// import Data from ('data.js')
import UI from ('ui.js')
import PubSub from "pubsub-js";


const Logic = (function () {

    function getNext() {
        PubSub.publish('next', number)
        return Data.next()

    }

    function listen() {
        PubSub.subscribe('next', (msg, number) => UI.updateNumberParagraph(number))
    }
})();


// console.log(`event[${msg}]:Number Updated to ${data}`)


