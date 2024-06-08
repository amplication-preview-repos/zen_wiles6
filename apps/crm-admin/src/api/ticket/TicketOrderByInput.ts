import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  issuedAt?: SortOrder;
  memberId?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
