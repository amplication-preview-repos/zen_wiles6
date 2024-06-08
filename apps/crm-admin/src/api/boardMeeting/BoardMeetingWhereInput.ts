import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BoardMeetingWhereInput = {
  agenda?: StringNullableFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  minutes?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
