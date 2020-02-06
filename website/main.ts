import 'bulma/css/bulma'
import { showAvailableLists, generate } from '../'

const input = window.document.getElementById('format') as HTMLInputElement
const output = window.document.getElementById('username') as HTMLInputElement
const list = window.document.getElementById('lists')
const button = window.document.getElementById('button')

const calculate = () => {
    output.value = generate(input.value)
}

// Init
button.addEventListener('click', calculate)
calculate()
list.innerHTML = showAvailableLists().join(', ')
