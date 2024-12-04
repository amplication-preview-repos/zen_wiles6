import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GeneralMeetingWhereInput = {
  agenda?: StringNullableFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  meetingType?: "Option1";
  minutes?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
