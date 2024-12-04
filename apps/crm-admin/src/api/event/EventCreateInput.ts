import { CheckInCreateNestedManyWithoutEventsInput } from "./CheckInCreateNestedManyWithoutEventsInput";
import { TicketCreateNestedManyWithoutEventsInput } from "./TicketCreateNestedManyWithoutEventsInput";
import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  checkIns?: CheckInCreateNestedManyWithoutEventsInput;
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  name?: string | null;
  startTime?: Date | null;
  ticketPrice?: number | null;
  tickets?: TicketCreateNestedManyWithoutEventsInput;
  tieredPrices?: InputJsonValue;
};
