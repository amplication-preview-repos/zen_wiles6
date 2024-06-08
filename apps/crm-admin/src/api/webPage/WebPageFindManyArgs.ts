import { WebPageWhereInput } from "./WebPageWhereInput";
import { WebPageOrderByInput } from "./WebPageOrderByInput";

export type WebPageFindManyArgs = {
  where?: WebPageWhereInput;
  orderBy?: Array<WebPageOrderByInput>;
  skip?: number;
  take?: number;
};
