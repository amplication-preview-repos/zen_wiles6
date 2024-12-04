import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type TicketUpdateInput = {
  event?: EventWhereUniqueInput | null;
  issuedAt?: Date | null;
  member?: MemberWhereUniqueInput | null;
  price?: number | null;
};
