import { MembershipTier as TMembershipTier } from "../api/membershipTier/MembershipTier";

export const MEMBERSHIPTIER_TITLE_FIELD = "tierName";

export const MembershipTierTitle = (record: TMembershipTier): string => {
  return record.tierName?.toString() || String(record.id);
};
