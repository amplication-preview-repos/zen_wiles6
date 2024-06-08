import { Member } from "../member/Member";

export type Mentee = {
  assignedMentor: string | null;
  createdAt: Date;
  id: string;
  member?: Member | null;
  updatedAt: Date;
};
