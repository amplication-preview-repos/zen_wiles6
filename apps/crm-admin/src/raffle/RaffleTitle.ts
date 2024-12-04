import { Raffle as TRaffle } from "../api/raffle/Raffle";

export const RAFFLE_TITLE_FIELD = "title";

export const RaffleTitle = (record: TRaffle): string => {
  return record.title?.toString() || String(record.id);
};
