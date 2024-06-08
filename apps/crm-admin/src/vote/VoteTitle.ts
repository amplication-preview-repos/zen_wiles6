import { Vote as TVote } from "../api/vote/Vote";

export const VOTE_TITLE_FIELD = "voter";

export const VoteTitle = (record: TVote): string => {
  return record.voter?.toString() || String(record.id);
};
