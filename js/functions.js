export default function({
   inputForm,
   randomNumber,
   screenOne,
   screenTwo,
   pScreenTwo,
   screenThree,
   attempts
}) {

   function tryToHit(e) {
      // to cancel form submission
      e.preventDefault()
      invalidNumber()

      if(Number(inputForm.value) == randomNumber) {
         console.log("acertou")
         hitNumberScreenToggle()
         triesMessage()
      } else {
         wrongNumberScreenToggle()
         console.log("tente de novo")
         console.log(attempts)
      }
   }

   function triesMessage() {
      if(attempts == 1) {
         pScreenTwo.innerText = `You got it right in ${attempts} trie`
      } else {
         pScreenTwo.innerText = `You got it right in ${attempts} tries`
      }
   }

   function invalidNumber() {
      if(inputForm.value < 0 || inputForm.value > 10 || inputForm.value == "") {
         alert("Please, choose a number between 0 and 10 in the field below")
         wrongNumberScreenToggle()
         resetInput()
         attempts = attempts--
      }
   }

   function playAgain() {
      hitNumberScreenToggle()
      resetInput()
      // to put autofocus in element after page refresh (native js function)
      inputForm.focus()
      attempts = 1
      randomNumber = Math.round(Math.random() * 10)
      console.log(randomNumber)
   }

   function tryAgain() {
      wrongNumberScreenToggle()
      resetInput()
      inputForm.focus()
      attempts++
   }

   function resetInput() {
      inputForm.value = ""
   }

   function hitNumberScreenToggle() {
      screenOne.classList.toggle("hide")
      screenTwo.classList.toggle("hide")
   }

   function wrongNumberScreenToggle() {
      screenOne.classList.toggle("hide")
      screenThree.classList.toggle("hide")
   }



   return {
      tryToHit,
      triesMessage,
      invalidNumber,
      playAgain,
      tryAgain,
      resetInput,
      hitNumberScreenToggle,
      wrongNumberScreenToggle
   }
}