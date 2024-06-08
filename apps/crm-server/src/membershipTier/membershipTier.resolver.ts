import * as graphql from "@nestjs/graphql";
import { MembershipTierResolverBase } from "./base/membershipTier.resolver.base";
import { MembershipTier } from "./base/MembershipTier";
import { MembershipTierService } from "./membershipTier.service";

@graphql.Resolver(() => MembershipTier)
export class MembershipTierResolver extends MembershipTierResolverBase {
  constructor(protected readonly service: MembershipTierService) {
    super(service);
  }
}
