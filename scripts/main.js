import { criminalMaker } from "./criminals/criminalsList.js";
import { getcriminals } from "./criminals/criminalsProvider.js";
import { getConvictions } from "./convictions/convictionProvider.js";
import convictionMaker from "./convictions/convictionSelect.js";
import NoteForm from "./notes/noteForm.js";
import "./criminals/knownAssociatesDialog.js"
import { DisplayNotesButton } from "./notes/displayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/displayNoteFormButton.js"
import { NoteList } from "./notes/noteList.js";


getcriminals().then(criminalMaker)

getConvictions().then(convictionMaker)

DisplayNotesButton()
DisplayNoteFormButton()
NoteForm()
NoteList()