"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport = require("passport");
const common_1 = require("@nestjs/common");
const pause = require("connect-pause");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.use(pause(200));
    app.enableCors({
        methods: 'GET',
        maxAge: 3600
    });
    app.use(require('express-session')({
        secret: 'sistema-clinicas',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    const port = process.env.PORT || 4200;
    console.log(`Server started, port: ${port}`);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map