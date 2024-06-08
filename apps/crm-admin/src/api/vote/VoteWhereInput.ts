import { StringFilter } from "../../util/StringFilter";
import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VoteWhereInput = {
  id?: StringFilter;
  poll?: PollWhereUniqueInput;
  selectedOption?: StringNullableFilter;
  voter?: StringNullableFilter;
};
