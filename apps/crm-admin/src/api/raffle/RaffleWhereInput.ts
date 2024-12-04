import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RaffleWhereInput = {
  description?: StringNullableFilter;
  drawDate?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
