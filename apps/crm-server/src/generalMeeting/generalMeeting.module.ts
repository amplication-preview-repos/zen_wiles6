import { Module } from "@nestjs/common";
import { GeneralMeetingModuleBase } from "./base/generalMeeting.module.base";
import { GeneralMeetingService } from "./generalMeeting.service";
import { GeneralMeetingController } from "./generalMeeting.controller";
import { GeneralMeetingResolver } from "./generalMeeting.resolver";

@Module({
  imports: [GeneralMeetingModuleBase],
  controllers: [GeneralMeetingController],
  providers: [GeneralMeetingService, GeneralMeetingResolver],
  exports: [GeneralMeetingService],
})
export class GeneralMeetingModule {}
