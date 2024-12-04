import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type MentorUpdateInput = {
  active?: boolean | null;
  member?: MemberWhereUniqueInput | null;
  specialization?: string | null;
};
