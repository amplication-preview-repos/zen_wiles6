import { BoardMeeting as TBoardMeeting } from "../api/boardMeeting/BoardMeeting";

export const BOARDMEETING_TITLE_FIELD = "title";

export const BoardMeetingTitle = (record: TBoardMeeting): string => {
  return record.title?.toString() || String(record.id);
};
