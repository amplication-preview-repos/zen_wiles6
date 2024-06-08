import { BoardMemberWhereInput } from "./BoardMemberWhereInput";
import { BoardMemberOrderByInput } from "./BoardMemberOrderByInput";

export type BoardMemberFindManyArgs = {
  where?: BoardMemberWhereInput;
  orderBy?: Array<BoardMemberOrderByInput>;
  skip?: number;
  take?: number;
};
