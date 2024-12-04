import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  startTime?: SortOrder;
  ticketPrice?: SortOrder;
  tieredPrices?: SortOrder;
  updatedAt?: SortOrder;
};
