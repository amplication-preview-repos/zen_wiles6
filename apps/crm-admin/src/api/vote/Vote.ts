import { Poll } from "../poll/Poll";

export type Vote = {
  createdAt: Date;
  id: string;
  poll?: Poll | null;
  selectedOption: string | null;
  updatedAt: Date;
  voter: string | null;
};
