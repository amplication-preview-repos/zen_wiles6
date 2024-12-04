import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CheckInListRelationFilter } from "../checkIn/CheckInListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipTierWhereUniqueInput } from "../membershipTier/MembershipTierWhereUniqueInput";
import { MenteeListRelationFilter } from "../mentee/MenteeListRelationFilter";
import { MentorListRelationFilter } from "../mentor/MentorListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type MemberWhereInput = {
  address?: StringNullableFilter;
  checkIns?: CheckInListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  membershipTier?: MembershipTierWhereUniqueInput;
  mentees?: MenteeListRelationFilter;
  mentors?: MentorListRelationFilter;
  mentorshipStatus?: "Option1";
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  tickets?: TicketListRelationFilter;
};
