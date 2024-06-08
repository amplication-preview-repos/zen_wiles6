import { SortOrder } from "../../util/SortOrder";

export type MenteeOrderByInput = {
  assignedMentor?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  updatedAt?: SortOrder;
};
