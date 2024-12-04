import { MembershipTierWhereInput } from "./MembershipTierWhereInput";
import { MembershipTierOrderByInput } from "./MembershipTierOrderByInput";

export type MembershipTierFindManyArgs = {
  where?: MembershipTierWhereInput;
  orderBy?: Array<MembershipTierOrderByInput>;
  skip?: number;
  take?: number;
};
