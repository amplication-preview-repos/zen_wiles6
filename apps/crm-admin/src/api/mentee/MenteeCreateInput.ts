import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type MenteeCreateInput = {
  assignedMentor?: string | null;
  member?: MemberWhereUniqueInput | null;
};
