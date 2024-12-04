import { GeneralMeeting as TGeneralMeeting } from "../api/generalMeeting/GeneralMeeting";

export const GENERALMEETING_TITLE_FIELD = "title";

export const GeneralMeetingTitle = (record: TGeneralMeeting): string => {
  return record.title?.toString() || String(record.id);
};
