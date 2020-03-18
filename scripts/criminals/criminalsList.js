import { usecriminals} from "./criminalsProvider.js";
import { criminalHTML } from "./criminalHTML.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => {
    // What crime was chosen?
    const theCrimeThatWasChosen = event.detail.chosenCrime

    // Get the criminals
    let criminalsToDisplay = usecriminals()

    if (theCrimeThatWasChosen !== "0") {
        // Filter the list of criminal who committed the crime
        criminalsToDisplay = criminalsToDisplay.filter(criminal => {
            if (criminal.conviction === theCrimeThatWasChosen) {
                return true
            }
            return false
        })
    }
    render(criminalsToDisplay)
})

const render = criminalsToRender => {
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            return criminalHTML(criminalObject)
        }
    ).join("")
}

export const criminalMaker = () => {
    const criminals = usecriminals()
    render(criminals)
}