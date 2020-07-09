import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
	name: 'card'
})
export class CardPipe implements PipeTransform {
	transform (value: string) {
		const intVal = +value
		const thousands = Math.floor(intVal / 1000)

		if (thousands === 0) {
			return intVal
		}

		return `${intVal % 1000}${String.fromCharCode(64 + thousands)}`
	}
}