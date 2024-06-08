import { SortOrder } from "../../util/SortOrder";

export type CheckInOrderByInput = {
  checkInTime?: SortOrder;
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  memberId?: SortOrder;
  updatedAt?: SortOrder;
};
