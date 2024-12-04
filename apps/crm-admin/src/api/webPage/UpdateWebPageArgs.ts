import { WebPageWhereUniqueInput } from "./WebPageWhereUniqueInput";
import { WebPageUpdateInput } from "./WebPageUpdateInput";

export type UpdateWebPageArgs = {
  where: WebPageWhereUniqueInput;
  data: WebPageUpdateInput;
};
