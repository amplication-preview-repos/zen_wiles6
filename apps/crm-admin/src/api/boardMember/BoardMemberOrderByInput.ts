import { SortOrder } from "../../util/SortOrder";

export type BoardMemberOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  joinDate?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
