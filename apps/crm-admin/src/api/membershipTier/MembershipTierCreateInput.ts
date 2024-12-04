import { MemberCreateNestedManyWithoutMembershipTiersInput } from "./MemberCreateNestedManyWithoutMembershipTiersInput";

export type MembershipTierCreateInput = {
  description?: string | null;
  fee?: number | null;
  members?: MemberCreateNestedManyWithoutMembershipTiersInput;
  tierName?: string | null;
};
