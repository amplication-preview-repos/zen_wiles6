import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type CheckInWhereInput = {
  checkInTime?: DateTimeNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
};
