import { CheckInListRelationFilter } from "../checkIn/CheckInListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventWhereInput = {
  checkIns?: CheckInListRelationFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  ticketPrice?: FloatNullableFilter;
  tickets?: TicketListRelationFilter;
  tieredPrices?: JsonFilter;
};
