import { BoardMember as TBoardMember } from "../api/boardMember/BoardMember";

export const BOARDMEMBER_TITLE_FIELD = "name";

export const BoardMemberTitle = (record: TBoardMember): string => {
  return record.name?.toString() || String(record.id);
};
