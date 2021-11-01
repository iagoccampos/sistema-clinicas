import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'rg'
})
export class RgPipe implements PipeTransform {

	transform(value: string, ...args: unknown[]) {
		// 3005470 > 3.005.470
		return [value.substr(0, 1), value.substr(1, 3), value.substr(4, 3)].join('.')
	}
}
