import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloController {

    @Get('/')
    getHello() {
        return 'Hello, World!';
    }
}
