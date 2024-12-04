import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MentorWhereInput = {
  active?: BooleanNullableFilter;
  id?: StringFilter;
  member?: MemberWhereUniqueInput;
  specialization?: StringNullableFilter;
};
