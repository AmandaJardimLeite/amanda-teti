import { Injectable } from "@nestjs/common";
import { CreateScenarioDto } from "../dto/create-scenario.dto";
import { Scenario } from "../entities/scenario.entity";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class CreateScenarioRepository{
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateScenarioDto) {
        const scenario = await this.prisma.scenario.create({
            data,
        });
        return scenario;
    }
    

}
