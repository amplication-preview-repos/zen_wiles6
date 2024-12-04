import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MembershipTierServiceBase } from "./base/membershipTier.service.base";

@Injectable()
export class MembershipTierService extends MembershipTierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
