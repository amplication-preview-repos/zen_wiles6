import { LearningModule as TLearningModule } from "../api/learningModule/LearningModule";

export const LEARNINGMODULE_TITLE_FIELD = "title";

export const LearningModuleTitle = (record: TLearningModule): string => {
  return record.title?.toString() || String(record.id);
};
