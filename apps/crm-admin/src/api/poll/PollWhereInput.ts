import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { VoteListRelationFilter } from "../vote/VoteListRelationFilter";

export type PollWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  meeting?: StringNullableFilter;
  options?: JsonFilter;
  question?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  votes?: VoteListRelationFilter;
};
