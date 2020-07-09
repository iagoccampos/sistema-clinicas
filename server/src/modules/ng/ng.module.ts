import { Module } from '@nestjs/common'
import { NgController } from './ng.controller'

@Module({
	controllers: [
		NgController
	]
})
export class NgModule { }