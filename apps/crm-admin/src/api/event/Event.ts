import { CheckIn } from "../checkIn/CheckIn";
import { Ticket } from "../ticket/Ticket";
import { JsonValue } from "type-fest";

export type Event = {
  checkIns?: Array<CheckIn>;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  name: string | null;
  startTime: Date | null;
  ticketPrice: number | null;
  tickets?: Array<Ticket>;
  tieredPrices: JsonValue;
  updatedAt: Date;
};
