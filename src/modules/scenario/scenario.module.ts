import { Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import { SharedModule } from 'src/shared/shared.module';
import * as UseCases from './use-cases'
import * as Repositories from './repository'


const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ...useCases, ],
})
export class ScenarioModule {}
