import { Event } from "../event/Event";
import { Member } from "../member/Member";

export type Ticket = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  issuedAt: Date | null;
  member?: Member | null;
  price: number | null;
  updatedAt: Date;
};
