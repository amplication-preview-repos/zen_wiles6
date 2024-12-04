import { SortOrder } from "../../util/SortOrder";

export type RaffleOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  drawDate?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
