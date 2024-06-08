import { Mentor as TMentor } from "../api/mentor/Mentor";

export const MENTOR_TITLE_FIELD = "specialization";

export const MentorTitle = (record: TMentor): string => {
  return record.specialization?.toString() || String(record.id);
};
