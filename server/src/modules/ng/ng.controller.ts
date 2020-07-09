import { Controller, Get, Res, Req } from '@nestjs/common'
import { Response, Request } from 'express'
import * as path from 'path'

const allowedExt = [
	'.js',
	'.ico',
	'.css',
	'.png'
]

@Controller()
export class NgController {

	@Get()
	async getNgFiles (@Req() req: Request, @Res() res: Response) {
		const url = req.url

		if (allowedExt.filter(ext => { return url.indexOf(ext) > 0 }).length > 0) {
			res.sendFile(path.resolve(`ng/${url}`))
		}
		else {
			res.sendFile(path.resolve(`ng/index.html`))
		}
	}
}