import { JsonValue } from "type-fest";
import { Vote } from "../vote/Vote";

export type Poll = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  meeting: string | null;
  options: JsonValue;
  question: string | null;
  startTime: Date | null;
  updatedAt: Date;
  votes?: Array<Vote>;
};
