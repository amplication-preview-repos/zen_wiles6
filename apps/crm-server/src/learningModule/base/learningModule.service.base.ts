/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, LearningModule as PrismaLearningModule } from "@prisma/client";

export class LearningModuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LearningModuleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.learningModule.count(args);
  }

  async learningModules<T extends Prisma.LearningModuleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LearningModuleFindManyArgs>
  ): Promise<PrismaLearningModule[]> {
    return this.prisma.learningModule.findMany<Prisma.LearningModuleFindManyArgs>(
      args
    );
  }
  async learningModule<T extends Prisma.LearningModuleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LearningModuleFindUniqueArgs>
  ): Promise<PrismaLearningModule | null> {
    return this.prisma.learningModule.findUnique(args);
  }
  async createLearningModule<T extends Prisma.LearningModuleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LearningModuleCreateArgs>
  ): Promise<PrismaLearningModule> {
    return this.prisma.learningModule.create<T>(args);
  }
  async updateLearningModule<T extends Prisma.LearningModuleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LearningModuleUpdateArgs>
  ): Promise<PrismaLearningModule> {
    return this.prisma.learningModule.update<T>(args);
  }
  async deleteLearningModule<T extends Prisma.LearningModuleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LearningModuleDeleteArgs>
  ): Promise<PrismaLearningModule> {
    return this.prisma.learningModule.delete(args);
  }
}
