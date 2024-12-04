import { CheckInCreateNestedManyWithoutMembersInput } from "./CheckInCreateNestedManyWithoutMembersInput";
import { MembershipTierWhereUniqueInput } from "../membershipTier/MembershipTierWhereUniqueInput";
import { MenteeCreateNestedManyWithoutMembersInput } from "./MenteeCreateNestedManyWithoutMembersInput";
import { MentorCreateNestedManyWithoutMembersInput } from "./MentorCreateNestedManyWithoutMembersInput";
import { TicketCreateNestedManyWithoutMembersInput } from "./TicketCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  address?: string | null;
  checkIns?: CheckInCreateNestedManyWithoutMembersInput;
  email?: string | null;
  membershipTier?: MembershipTierWhereUniqueInput | null;
  mentees?: MenteeCreateNestedManyWithoutMembersInput;
  mentors?: MentorCreateNestedManyWithoutMembersInput;
  mentorshipStatus?: "Option1" | null;
  name?: string | null;
  phone?: string | null;
  tickets?: TicketCreateNestedManyWithoutMembersInput;
};
