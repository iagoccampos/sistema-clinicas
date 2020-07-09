
export function dateToDateInput (date: any) {
	if (!date) {
		return ''
	}

	const newDate = new Date(date)

	const year = newDate.getUTCFullYear().toString()
	const month = (newDate.getUTCMonth() + 1).toString().padStart(2, '0')
	const day = newDate.getUTCDate().toString().padStart(2, '0')
	return `${year}-${month}-${day}`
}