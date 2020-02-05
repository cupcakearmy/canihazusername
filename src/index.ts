import wordlist from './wordlist.json'

const randomElementFromArray = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

export const showAvailableLists = () => {
	const keys = Object.keys(wordlist)
	console.log(keys)
	return keys
}

export const generate = (format: string = '{character}_{english}', maxReformats = 16): string => {
	for (let i = 0; i < maxReformats; i++) {
		const match = /\{.*?\}/.exec(format)
		if (match === null) break

		const keys = match[0]
			.slice(1, -1)
			.split('|')
			.map(key => key.trim())
			.filter(key => key !== '') as [keyof typeof wordlist]
		const lists = keys.map(key => Array.isArray(wordlist[key]) ? wordlist[key] : [])
		const flatteded = lists.reduce((acc, val) => acc.concat(val), []);
		const value: string = flatteded.length > 0
			? randomElementFromArray(flatteded)
			: ''
		format = format.replace(match[0], value)
	}

	return format
}

export default generate