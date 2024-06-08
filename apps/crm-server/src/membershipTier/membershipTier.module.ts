import { Module } from "@nestjs/common";
import { MembershipTierModuleBase } from "./base/membershipTier.module.base";
import { MembershipTierService } from "./membershipTier.service";
import { MembershipTierController } from "./membershipTier.controller";
import { MembershipTierResolver } from "./membershipTier.resolver";

@Module({
  imports: [MembershipTierModuleBase],
  controllers: [MembershipTierController],
  providers: [MembershipTierService, MembershipTierResolver],
  exports: [MembershipTierService],
})
export class MembershipTierModule {}
