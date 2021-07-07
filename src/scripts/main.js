import { fetchLetters } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


const mainContainer = document.querySelector("#container")


const renderAllHTML = () => {
    fetchLetters().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}


renderAllHTML()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderAllHTML()
    }
)