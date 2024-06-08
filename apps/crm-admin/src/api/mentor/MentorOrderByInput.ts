import { SortOrder } from "../../util/SortOrder";

export type MentorOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
