import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RaffleService } from "./raffle.service";
import { RaffleControllerBase } from "./base/raffle.controller.base";

@swagger.ApiTags("raffles")
@common.Controller("raffles")
export class RaffleController extends RaffleControllerBase {
  constructor(protected readonly service: RaffleService) {
    super(service);
  }
}
