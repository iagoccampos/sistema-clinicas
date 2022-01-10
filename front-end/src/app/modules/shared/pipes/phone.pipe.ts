import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'phone'
})
export class PhonePipe implements PipeTransform {

	// 35997670878 > (35) 99767-0878
	transform(value: string, ...args: unknown[]) {
		if (!value) {
			return
		}

		const ddd = value.slice(0, 2)
		if (value.length === 11) {
			return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
		}

		return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
	}
}
