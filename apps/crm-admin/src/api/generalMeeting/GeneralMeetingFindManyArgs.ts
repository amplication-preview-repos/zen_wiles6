import { GeneralMeetingWhereInput } from "./GeneralMeetingWhereInput";
import { GeneralMeetingOrderByInput } from "./GeneralMeetingOrderByInput";

export type GeneralMeetingFindManyArgs = {
  where?: GeneralMeetingWhereInput;
  orderBy?: Array<GeneralMeetingOrderByInput>;
  skip?: number;
  take?: number;
};
