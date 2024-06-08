import { SortOrder } from "../../util/SortOrder";

export type VoteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pollId?: SortOrder;
  selectedOption?: SortOrder;
  updatedAt?: SortOrder;
  voter?: SortOrder;
};
