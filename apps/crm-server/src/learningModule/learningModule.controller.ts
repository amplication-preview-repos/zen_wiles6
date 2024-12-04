import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LearningModuleService } from "./learningModule.service";
import { LearningModuleControllerBase } from "./base/learningModule.controller.base";

@swagger.ApiTags("learningModules")
@common.Controller("learningModules")
export class LearningModuleController extends LearningModuleControllerBase {
  constructor(protected readonly service: LearningModuleService) {
    super(service);
  }
}
