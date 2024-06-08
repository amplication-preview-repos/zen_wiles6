import { Donation as TDonation } from "../api/donation/Donation";

export const DONATION_TITLE_FIELD = "donor";

export const DonationTitle = (record: TDonation): string => {
  return record.donor?.toString() || String(record.id);
};
