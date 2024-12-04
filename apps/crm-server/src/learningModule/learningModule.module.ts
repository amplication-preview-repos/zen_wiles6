import { Module } from "@nestjs/common";
import { LearningModuleModuleBase } from "./base/learningModule.module.base";
import { LearningModuleService } from "./learningModule.service";
import { LearningModuleController } from "./learningModule.controller";
import { LearningModuleResolver } from "./learningModule.resolver";

@Module({
  imports: [LearningModuleModuleBase],
  controllers: [LearningModuleController],
  providers: [LearningModuleService, LearningModuleResolver],
  exports: [LearningModuleService],
})
export class LearningModuleModule {}
