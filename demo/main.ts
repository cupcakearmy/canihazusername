import { generate, showAvailableLists } from '../src/index'

const input = window.document.getElementById('format') as HTMLInputElement
const output = window.document.getElementById('username') as HTMLInputElement
const list = window.document.getElementById('lists')
const button = window.document.getElementById('button')

function calculate() {
  output.value = generate(input.value)
}

// Init
button?.addEventListener('click', calculate)
calculate()
if (list) list.innerHTML = showAvailableLists().join(', ')
