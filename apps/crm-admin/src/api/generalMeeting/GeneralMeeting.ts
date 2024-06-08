export type GeneralMeeting = {
  agenda: string | null;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  meetingType?: "Option1" | null;
  minutes: string | null;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
};
