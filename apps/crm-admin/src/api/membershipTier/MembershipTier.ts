import { Member } from "../member/Member";

export type MembershipTier = {
  createdAt: Date;
  description: string | null;
  fee: number | null;
  id: string;
  members?: Array<Member>;
  tierName: string | null;
  updatedAt: Date;
};
