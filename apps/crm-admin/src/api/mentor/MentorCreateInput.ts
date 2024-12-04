import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type MentorCreateInput = {
  active?: boolean | null;
  member?: MemberWhereUniqueInput | null;
  specialization?: string | null;
};
