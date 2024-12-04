import { CheckInUpdateManyWithoutEventsInput } from "./CheckInUpdateManyWithoutEventsInput";
import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";
import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  checkIns?: CheckInUpdateManyWithoutEventsInput;
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  name?: string | null;
  startTime?: Date | null;
  ticketPrice?: number | null;
  tickets?: TicketUpdateManyWithoutEventsInput;
  tieredPrices?: InputJsonValue;
};
