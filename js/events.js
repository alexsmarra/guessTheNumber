export default function({
   buttonForm,
   functions,
   screenOne,
   screenTwo,
   screenThree,
   btnScreenTwo,
   btnScreenThree
}) {

   buttonForm.addEventListener("click", functions.tryToHit)

   btnScreenTwo.addEventListener("click", functions.playAgain)

   btnScreenThree.addEventListener("click", functions.tryAgain)

}