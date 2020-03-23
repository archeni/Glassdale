import { getNotes, useNotes } from "./noteProvider.js"
import { Note } from "./noteHTML.js"

const HTMLTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")
let visibility = false;

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
  visibility = !visibility

  if (visibility) {
      HTMLTarget.classList.remove("invisible")
  }
  else {
      HTMLTarget.classList.add("invisible")
  }
})

const render = () => {
    if (visibility) {
        HTMLTarget.classList.remove("invisible")
    }
    else {
        HTMLTarget.classList.add("invisible")
    }

    getNotes().then(() => {
        const allTheNotes = useNotes()

        HTMLTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return Note(currentNoteObject)
            }
        ).join("")
  })
}


export const NoteList = () => {
  render()
}