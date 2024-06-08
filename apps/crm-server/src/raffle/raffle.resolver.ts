import * as graphql from "@nestjs/graphql";
import { RaffleResolverBase } from "./base/raffle.resolver.base";
import { Raffle } from "./base/Raffle";
import { RaffleService } from "./raffle.service";

@graphql.Resolver(() => Raffle)
export class RaffleResolver extends RaffleResolverBase {
  constructor(protected readonly service: RaffleService) {
    super(service);
  }
}
