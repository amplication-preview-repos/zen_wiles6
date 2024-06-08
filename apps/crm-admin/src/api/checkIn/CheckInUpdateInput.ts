import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type CheckInUpdateInput = {
  checkInTime?: Date | null;
  event?: EventWhereUniqueInput | null;
  member?: MemberWhereUniqueInput | null;
};
