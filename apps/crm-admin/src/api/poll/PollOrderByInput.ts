import { SortOrder } from "../../util/SortOrder";

export type PollOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  meeting?: SortOrder;
  options?: SortOrder;
  question?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
