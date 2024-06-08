import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";

export type VoteCreateInput = {
  poll?: PollWhereUniqueInput | null;
  selectedOption?: string | null;
  voter?: string | null;
};
