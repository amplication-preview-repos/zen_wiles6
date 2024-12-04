import { MemberUpdateManyWithoutMembershipTiersInput } from "./MemberUpdateManyWithoutMembershipTiersInput";

export type MembershipTierUpdateInput = {
  description?: string | null;
  fee?: number | null;
  members?: MemberUpdateManyWithoutMembershipTiersInput;
  tierName?: string | null;
};
