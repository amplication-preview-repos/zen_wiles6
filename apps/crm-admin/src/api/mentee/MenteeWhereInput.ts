import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type MenteeWhereInput = {
  assignedMentor?: StringNullableFilter;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
};
