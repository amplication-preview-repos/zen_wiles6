import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberListRelationFilter } from "../member/MemberListRelationFilter";

export type MembershipTierWhereInput = {
  description?: StringNullableFilter;
  fee?: FloatNullableFilter;
  id?: StringFilter;
  members?: MemberListRelationFilter;
  tierName?: StringNullableFilter;
};
