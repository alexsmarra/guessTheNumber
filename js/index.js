import Functions from "./functions.js"
import Events from "./events.js"
import {
   inputForm,
   buttonForm,
   screenOne,
   screenTwo,
   btnScreenTwo,
   pScreenTwo,
   screenThree,
   btnScreenThree,
   randomNumber,
   attempts
} from "./variables.js"

const functions = Functions({
   inputForm,
   buttonForm,
   screenOne,
   screenTwo,
   pScreenTwo,
   screenThree,
   randomNumber,
   attempts
})

const events = Events({
   buttonForm,
   functions,
   screenOne,
   screenTwo,
   screenThree,
   btnScreenTwo,
   btnScreenThree
})

console.log(randomNumber)

