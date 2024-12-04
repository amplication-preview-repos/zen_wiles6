import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LearningModuleServiceBase } from "./base/learningModule.service.base";

@Injectable()
export class LearningModuleService extends LearningModuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
