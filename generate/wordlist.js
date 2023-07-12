import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs'
import { basename, join } from 'path'

const endsWithTxt = /^.*\.txt$/

function walkDir(dir, callback) {
  readdirSync(dir).forEach((f) => {
    const dirPath = join(dir, f)
    const isDirectory = statSync(dirPath).isDirectory()
    isDirectory ? walkDir(dirPath, callback) : callback(join(dir, f))
  })
}

function convertAndSaveWordlistAsJSON() {
  const wordlist = {}

  walkDir('./generate/wordlist', (filename) => {
    // Not a txt file
    if (!endsWithTxt.test(filename)) return

    // Read the file
    const file = readFileSync(filename, 'utf-8')

    // Each line of the file to an array removing the empty lines
    const lines = file
      .split('\n')
      .filter((entry) => entry !== '')
      .map((entry) => entry.trim())

    // Remove duplicates
    const set = new Set(lines)
    const name = basename(filename, 'utf-8').slice(0, -4)
    wordlist[name] = [...set]
  })

  writeFileSync('./src/wordlist.json', JSON.stringify(wordlist))
}

convertAndSaveWordlistAsJSON()
