import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  membershipTierId?: SortOrder;
  mentorshipStatus?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
