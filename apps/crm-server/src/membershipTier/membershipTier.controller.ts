import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MembershipTierService } from "./membershipTier.service";
import { MembershipTierControllerBase } from "./base/membershipTier.controller.base";

@swagger.ApiTags("membershipTiers")
@common.Controller("membershipTiers")
export class MembershipTierController extends MembershipTierControllerBase {
  constructor(protected readonly service: MembershipTierService) {
    super(service);
  }
}
