import 'bulma/css/bulma'
import { showAvailableLists, generate } from '../'

const input = window.document.getElementById('format') as HTMLInputElement
const output = window.document.getElementById('username') as HTMLInputElement
const list = window.document.getElementById('lists')
const button = window.document.getElementById('button')

const gen = () => {
    output.value = generate(input.value)
}

button.addEventListener('click', gen)
button.addEventListener('touchstart', gen)

gen()
list.innerHTML = showAvailableLists().join(', ')
