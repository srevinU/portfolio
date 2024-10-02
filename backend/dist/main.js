"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://portfolio.localhost/',
            'https://preprod-1ebc4ba3.cedricsegura.dev/',
            'https://cedricsegura.dev/',
        ],
        credentials: false,
        allowedHeaders: ['*'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map