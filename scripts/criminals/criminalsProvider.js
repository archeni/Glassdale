let criminals = []

export const usecriminals = () => {
    return criminals.slice()
}

export const getcriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
      .then(response => response.json())
      .then(
          parsedcriminals => {
              console.table(parsedcriminals)
              criminals = parsedcriminals
          }
      )
}
