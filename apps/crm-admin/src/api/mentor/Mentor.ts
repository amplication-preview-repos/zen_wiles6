import { Member } from "../member/Member";

export type Mentor = {
  active: boolean | null;
  createdAt: Date;
  id: string;
  member?: Member | null;
  specialization: string | null;
  updatedAt: Date;
};
