import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "meeting";

export const PollTitle = (record: TPoll): string => {
  return record.meeting?.toString() || String(record.id);
};
