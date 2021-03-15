import wordlist from './wordlist.json'

const DEFAULT_OPTIONS = {
  maxReformats: 16,
  lists: {} as Record<string, string[]>,
}

function randomElementFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function showAvailableLists(): string[] {
  return Object.keys(wordlist)
}

export function generate(
  format: string = '{character}_{english}',
  options: Partial<typeof DEFAULT_OPTIONS> = {}
): string {
  const opt: typeof DEFAULT_OPTIONS = { ...DEFAULT_OPTIONS, ...options }
  const combined = { ...wordlist, ...options.lists }

  for (let i = 0; i < opt.maxReformats; i++) {
    const match = /\{.*?\}/.exec(format)
    if (match === null) break

    const keys = match[0]
      .slice(1, -1)
      .split('|')
      .map((key) => key.trim())
      .filter((key) => key !== '') as [keyof typeof combined]
    const lists = keys.map((key) => (Array.isArray(combined[key]) ? combined[key] : []))
    const flattened = lists.reduce((acc, val) => acc.concat(val), [])
    const value: string = flattened.length > 0 ? randomElementFromArray(flattened) : ''
    format = format.replace(match[0], value)
  }

  return format
}

export default generate
