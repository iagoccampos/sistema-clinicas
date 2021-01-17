declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'production' | 'dev'
			PORT: number
			JWT_SECRET: string
		}
	}
}

export { }
