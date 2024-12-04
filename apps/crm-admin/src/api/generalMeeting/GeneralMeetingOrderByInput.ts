import { SortOrder } from "../../util/SortOrder";

export type GeneralMeetingOrderByInput = {
  agenda?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  meetingType?: SortOrder;
  minutes?: SortOrder;
  startTime?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
