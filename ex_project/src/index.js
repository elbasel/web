
// This makes lodash avalaible to this file.

// Webpack will analyze the functions we use from the lodash libaray and only 
// add the required lines of code from the lodash.js file for those functions to work
// And generate the actual js file that will run in the brower: "main.js"
// Which looks like this
import _ from 'lodash'

// Now we can also do npx webpack watch to edit main.js as index.js changes automatically

// This is a script that can also be run using npm run watch



const h1Element = document.querySelector('h1')



// // Delay by 3 seconds
// setTimeout(() => h1Element.textContent = 'Hello Aleins!!', 3000)


// // Now I want to use Lodash...
// // Since I now have lodash in my html fileI can now use the global varible _


// const output = _.camelCase('lodash is cool')
// setTimeout(() => h1Element.textContent = output, 5000)


// Now we have lodash installed. but it's not avalaible as a global varible anymore!!
// Now we can access lodash by importing it

// Now let's try using a module bundeler like "webpack"
// It takes some time
// Bonus command ::
// We just edited this file

h1Element.textContent = 'sudo apt install hollywood'