export function waitForSeconds(sec: number) {
	return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

export function removeSpecialChar(val: string) {
	return val.replace(/-|\/|\(|\)|\.|:|\s|\+|,|@|\[|\]"/g, '')
}
