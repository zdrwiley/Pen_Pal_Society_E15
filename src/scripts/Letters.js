import { getLetters } from "./dataAccess.js";

//When called, this function will render the contents of the JSON database as HTML, with each letter object from the
//database displayed as a list item in an unordered list.

export const letterList = () => {
    const letters = getLetters()

    let html = '<ul class="wrapper">'
   
    html += letters.map(letter => {
        return `
        <li>
            Dear ${letter.recipient},
            <br>
            <br>
            ${letter.letter}
            <br>
            <br>
            Sincerely, <br>  
            ${letter.author}
            <br>
            <br>
            Sent on ${letter.date}
            <br>
            <br>
            <button class="topic_tag">${letter.topic}</button>
        </li>`
    }
    ).join('')

    html += '</ul>'

    return html
}