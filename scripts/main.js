import { criminalMaker } from "./criminals/criminalsList.js";
import { getcriminals } from "./criminals/criminalsProvider.js";
import { getConvictions } from "./convictions/convictionProvider.js";
import convictionMaker from "./convictions/convictionSelect.js";
import NoteForm from "./notes/noteForm.js";

getcriminals().then(criminalMaker)

getConvictions().then(convictionMaker)

NoteForm()