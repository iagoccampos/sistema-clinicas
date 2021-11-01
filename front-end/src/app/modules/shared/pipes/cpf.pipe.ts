import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'cpf'
})
export class CpfPipe implements PipeTransform {

	transform(val: string, ...args: unknown[]) {
		return val ?
			[val.substr(0, 3), val.substr(3, 3), val.substr(6, 3)].join('.') + '-' + val.substr(-2.2) : ''
	}
}
