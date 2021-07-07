import { sendLetter } from "./dataAccess.js"

const  mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
   if(clickEvent.target.id === "sendLetter") {

     //Retrieve current form values
     
     const authorSelected = document.getElementById("authorChoice")
     const authorName = authorSelected.value
     
     const letterText = document.getElementById("letterText").value

     const topicChoiceList = document.querySelectorAll("input[name='topicChoice']:checked")
     const topicChoice = Array.from(topicChoiceList).map(element => element.value)  
   
     const recipientSelected = document.getElementById("recipientSelection")
     const selectedRecipient = recipientSelected.value

     const dateInput = Date()

     // Make an object that contains the current form values, so we can Post it to the JSON database
    const dataToSend = {
      author: authorName,
      letter: letterText,
      topic: topicChoice,
      recipient: selectedRecipient,
      date: dateInput 
    }
     //Call the imported function that Posts the object containing our form data to the JSON database
     sendLetter(dataToSend)
   }
})

//When called, this function will render the Pen Pal Form HTML
export const PenPalForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="authorChoice">Author</label>
        <select id="authorChoice" class="select">
            <option value="Maya Angelou (maya@angelou.com)">Maya Angelou</option>
            <option value="Mark Twain (mark.twain@seersuckerenthusiast.com)">Mark Twain</option>
            <option value="Albert Camus (albert.camus@existentialdread.com)">Albert Camus</option>
        </select>
    </div>

    <br>
    
    <div class="field">
        <label class="label" for="letterText">Letter</label>
        <textarea name="letterText" rows="10" cols="80" select id ="letterText">
        </textarea>
    </div>

    <br>
    
    <div class="field">
        <label class="label" for="topicChoice">Topics</label>
        <form>        
            <input type="radio" name="topicChoice" value="Business">
            <label for="topicChoice1">Business</label>
            <input type="radio" name="topicChoice" value="Friendly">
            <label for="topicChoice2">Friendly</label>
            <input type="radio" name="topicChoice" value="Family">
            <label for="topicChoice3">Family</label>
            <input type="radio" name="topicChoice" value="Congratulations">
            <label for="topicChoice4">Congratulations</label>
            <input type="radio" name="topicChoice" value="Condolences">
            <label for="topicChoice5">Condolences</label>
        </form>
    </div>

    <br>

    <div class="field">
        <label class="label" for="recipientChoice">Recipient</label>
        <select id="recipientSelection" class="select">
            <option value="Maya Angelou (maya@angelou.com)">Maya Angelou</option>
            <option value="Mark Twain (mark.twain@seersuckerenthusiast.com)">Mark Twain</option>
            <option value="Albert Camus (albert.camus@existentialdread.com)">Albert Camus</option>
        </select>
    </div>
      
    <br>

    <article>
        <button class="button" id="sendLetter">Send Letter</button>
    </article>
`
return html
}