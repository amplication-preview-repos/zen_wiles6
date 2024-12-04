import { SortOrder } from "../../util/SortOrder";

export type BoardMeetingOrderByInput = {
  agenda?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  minutes?: SortOrder;
  startTime?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
