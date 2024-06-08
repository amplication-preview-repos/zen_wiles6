import { CheckInUpdateManyWithoutMembersInput } from "./CheckInUpdateManyWithoutMembersInput";
import { MembershipTierWhereUniqueInput } from "../membershipTier/MembershipTierWhereUniqueInput";
import { MenteeUpdateManyWithoutMembersInput } from "./MenteeUpdateManyWithoutMembersInput";
import { MentorUpdateManyWithoutMembersInput } from "./MentorUpdateManyWithoutMembersInput";
import { TicketUpdateManyWithoutMembersInput } from "./TicketUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  address?: string | null;
  checkIns?: CheckInUpdateManyWithoutMembersInput;
  email?: string | null;
  membershipTier?: MembershipTierWhereUniqueInput | null;
  mentees?: MenteeUpdateManyWithoutMembersInput;
  mentors?: MentorUpdateManyWithoutMembersInput;
  mentorshipStatus?: "Option1" | null;
  name?: string | null;
  phone?: string | null;
  tickets?: TicketUpdateManyWithoutMembersInput;
};
