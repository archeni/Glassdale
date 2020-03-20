export const criminalHTML = (criminal) => {
  return `
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
        <button id="associates--${criminal.id}">Show Associates</button>
      </section>
    `
}