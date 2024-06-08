import { Event } from "../event/Event";
import { Member } from "../member/Member";

export type CheckIn = {
  checkInTime: Date | null;
  createdAt: Date;
  event?: Event | null;
  id: string;
  member?: Member | null;
  updatedAt: Date;
};
