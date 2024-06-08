import { InputJsonValue } from "../../types";
import { VoteCreateNestedManyWithoutPollsInput } from "./VoteCreateNestedManyWithoutPollsInput";

export type PollCreateInput = {
  endTime?: Date | null;
  meeting?: string | null;
  options?: InputJsonValue;
  question?: string | null;
  startTime?: Date | null;
  votes?: VoteCreateNestedManyWithoutPollsInput;
};
