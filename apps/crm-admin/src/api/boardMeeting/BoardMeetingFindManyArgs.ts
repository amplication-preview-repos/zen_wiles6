import { BoardMeetingWhereInput } from "./BoardMeetingWhereInput";
import { BoardMeetingOrderByInput } from "./BoardMeetingOrderByInput";

export type BoardMeetingFindManyArgs = {
  where?: BoardMeetingWhereInput;
  orderBy?: Array<BoardMeetingOrderByInput>;
  skip?: number;
  take?: number;
};
