import { Module } from "@nestjs/common";
import { RaffleModuleBase } from "./base/raffle.module.base";
import { RaffleService } from "./raffle.service";
import { RaffleController } from "./raffle.controller";
import { RaffleResolver } from "./raffle.resolver";

@Module({
  imports: [RaffleModuleBase],
  controllers: [RaffleController],
  providers: [RaffleService, RaffleResolver],
  exports: [RaffleService],
})
export class RaffleModule {}
