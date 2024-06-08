import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BoardMemberWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  joinDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  role?: StringNullableFilter;
};
