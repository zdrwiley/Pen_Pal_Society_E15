import { PenPalForm } from "./PenPalForm.js"
import { letterList } from "./Letters.js"

export const PenPal = () => {
    return `
        <h1>Pen Pal Society</h1>
        <section class="penPalForm">
        ${PenPalForm()}
        </section>

        <h2>Letters</h2>
        ${letterList()}
    `
}