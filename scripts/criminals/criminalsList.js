import { usecriminals } from "./criminalsProvider.js";

let HTMLTarget = document.querySelector('.criminalsContainer');


export const criminalMaker = () => {
  const criminalData = usecriminals();

  for (const criminal of criminalData) {
    HTMLTarget.innerHTML += `
      <section class='criminalInfo'>
        <h3>
          ${criminal.name}
        </h3>
        <ul class='noDots'>
          <li>
            Age: ${criminal.age}
          </li>
          <li>
            Crime: ${criminal.conviction}
          </li>
          <li>
            Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
          </li>
          <li>
            Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
          </li>
        </ul>
      </section>
    `
    console.log(criminal.name)
  }
}