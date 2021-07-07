const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
    letters: []
}

export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetter)
    }

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(letters => {
            applicationState.letters = letters
        })
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

