import * as graphql from "@nestjs/graphql";
import { LearningModuleResolverBase } from "./base/learningModule.resolver.base";
import { LearningModule } from "./base/LearningModule";
import { LearningModuleService } from "./learningModule.service";

@graphql.Resolver(() => LearningModule)
export class LearningModuleResolver extends LearningModuleResolverBase {
  constructor(protected readonly service: LearningModuleService) {
    super(service);
  }
}
