const fs = require('fs')
const path = require('path')
const util = require('util')

const endsWithTxt = /^.*\.txt$/

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f))
  })
}

function convertAndSaveWordlistAsJSON() {
  const wordlist = {}

  walkDir('./generate/wordlist', (filename) => {
    // Not a txt file
    if (!endsWithTxt.test(filename)) return

    // Read the file
    const file = fs.readFileSync(filename, 'utf-8')

    // Each line of the file to an array removing the empty lines
    const lines = file
      .split('\n')
      .filter((entry) => entry !== '')
      .map((entry) => entry.trim())

    // Remove duplicates
    const set = new Set(lines)
    const name = path.basename(filename, 'utf-8').slice(0, -4)
    wordlist[name] = [...set]
  })

  fs.writeFileSync('./src/wordlist.json', JSON.stringify(wordlist))
}

convertAndSaveWordlistAsJSON()
