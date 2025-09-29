import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UpdateOptionUseCase {
  constructor(
    private readonly updateOptionRepository: UpdateOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: Update  ScenarioDto) {
    try {
      const scenario = await this.updateScenarioRepository.UpadateScenario(id, data);
      this.logger.log(`Scenario with id ${id} updated successfully`);
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
