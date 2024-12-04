import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TicketWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  issuedAt?: DateTimeNullableFilter;
  member?: MemberWhereUniqueInput;
  price?: FloatNullableFilter;
};
