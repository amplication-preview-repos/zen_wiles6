import { LearningModuleWhereInput } from "./LearningModuleWhereInput";
import { LearningModuleOrderByInput } from "./LearningModuleOrderByInput";

export type LearningModuleFindManyArgs = {
  where?: LearningModuleWhereInput;
  orderBy?: Array<LearningModuleOrderByInput>;
  skip?: number;
  take?: number;
};
