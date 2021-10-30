declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: 'production' | 'dev'
			readonly PORT: number
			readonly JWT_SECRET: string
		}
	}
}

export { }
