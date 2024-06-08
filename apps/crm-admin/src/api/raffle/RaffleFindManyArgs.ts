import { RaffleWhereInput } from "./RaffleWhereInput";
import { RaffleOrderByInput } from "./RaffleOrderByInput";

export type RaffleFindManyArgs = {
  where?: RaffleWhereInput;
  orderBy?: Array<RaffleOrderByInput>;
  skip?: number;
  take?: number;
};
