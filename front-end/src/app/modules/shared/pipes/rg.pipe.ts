import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'rg'
})
export class RgPipe implements PipeTransform {

	// 3005470 > 3.005.470
	transform(value: string, ...args: unknown[]) {
		if (!value) {
			return
		}

		const text = value.replace(/[^\d]/g, '')
		console.log(value, text)
		return [text.substring(0, 1), text.substring(1, 4), text.substring(4)]
			.filter((el) => el)
			.join('.')
			.substring(0, 9)
	}
}
