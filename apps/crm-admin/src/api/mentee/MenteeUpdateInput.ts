import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type MenteeUpdateInput = {
  assignedMentor?: string | null;
  member?: MemberWhereUniqueInput | null;
};
