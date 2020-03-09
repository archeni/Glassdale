import { criminalMaker } from "./criminals/criminalsList.js";
import { getcriminals } from "./criminals/criminalsProvider.js";

getcriminals().then(() => criminalMaker())