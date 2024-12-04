import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";

export type VoteUpdateInput = {
  poll?: PollWhereUniqueInput | null;
  selectedOption?: string | null;
  voter?: string | null;
};
