import { InputJsonValue } from "../../types";
import { VoteUpdateManyWithoutPollsInput } from "./VoteUpdateManyWithoutPollsInput";

export type PollUpdateInput = {
  endTime?: Date | null;
  meeting?: string | null;
  options?: InputJsonValue;
  question?: string | null;
  startTime?: Date | null;
  votes?: VoteUpdateManyWithoutPollsInput;
};
