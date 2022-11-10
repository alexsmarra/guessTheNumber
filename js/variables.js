const inputForm = document.querySelector("input")
const buttonForm = document.querySelector("button")

const screenOne = document.querySelector(".screen-1")
const screenTwo = document.querySelector(".screen-2")
const btnScreenTwo = screenTwo.querySelector("button")
const pScreenTwo = screenTwo.querySelector("p")
const screenThree = document.querySelector(".screen-3")
const btnScreenThree = screenThree.querySelector("button")

const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

export {
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
}