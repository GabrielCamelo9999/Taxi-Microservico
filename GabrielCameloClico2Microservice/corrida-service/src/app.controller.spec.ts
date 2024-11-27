import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
    constructor(private readonly prisma: PrismaService) {}

    @MessagePattern('registrar_corrida')
    async registrarCorrida(data: any) {
        const corrida = await this.prisma.corrida.create({ data });
        return corrida;
    }
}

