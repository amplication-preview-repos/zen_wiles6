import { CheckIn } from "../checkIn/CheckIn";
import { MembershipTier } from "../membershipTier/MembershipTier";
import { Mentee } from "../mentee/Mentee";
import { Mentor } from "../mentor/Mentor";
import { Ticket } from "../ticket/Ticket";

export type Member = {
  address: string | null;
  checkIns?: Array<CheckIn>;
  createdAt: Date;
  email: string | null;
  id: string;
  membershipTier?: MembershipTier | null;
  mentees?: Array<Mentee>;
  mentors?: Array<Mentor>;
  mentorshipStatus?: "Option1" | null;
  name: string | null;
  phone: string | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
