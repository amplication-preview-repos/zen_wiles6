import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CheckInService } from "./checkIn.service";
import { CheckInControllerBase } from "./base/checkIn.controller.base";

@swagger.ApiTags("checkIns")
@common.Controller("checkIns")
export class CheckInController extends CheckInControllerBase {
  constructor(protected readonly service: CheckInService) {
    super(service);
  }
}
