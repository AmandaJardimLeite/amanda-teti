import { Injectable, Logger } from '@nestjs/common';
import { DeleteOptionRepository } from '../repository';

@Injectable()
export class DeleteScenarioUseCase {
  constructor(
    private readonly deleteScenarioRepository: DeleteOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id:string) {
    try {
      const scenario = await this.deleteScenarioRepository.DeleteOption(id);
      this.logger.log(`Scenario created: ${scenario.name}`);
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}