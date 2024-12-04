import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RaffleServiceBase } from "./base/raffle.service.base";

@Injectable()
export class RaffleService extends RaffleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
