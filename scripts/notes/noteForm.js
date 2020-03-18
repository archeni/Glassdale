import { saveNote } from "./noteProvider.js"

const HTMLTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        HTMLTarget.classList.remove("invisible")
    }
    else {
        HTMLTarget.classList.add("invisible")
    }
})

// Handle browser-generated click event in component
HTMLTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteText = document.querySelector("#noteText").value
        const criminalName = document.querySelector("#criminal").value

        // Make a new object representation of a note
        const newNote = {
            noteText: noteText,
            criminal: criminalName,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    HTMLTarget.classList.add("invisible")
    HTMLTarget.innerHTML = `
        <fieldset>
            <label for="noteText">Note:</label>
            <input type="text" id="noteText">
        </fieldset>
        <fieldset>
            <label for="criminal">Criminal:</label>
            <input type="text" id="criminal">
        </fieldset>
        <button id="saveNote">Save Note</button>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm