import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
