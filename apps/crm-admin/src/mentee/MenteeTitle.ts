import { Mentee as TMentee } from "../api/mentee/Mentee";

export const MENTEE_TITLE_FIELD = "assignedMentor";

export const MenteeTitle = (record: TMentee): string => {
  return record.assignedMentor?.toString() || String(record.id);
};
