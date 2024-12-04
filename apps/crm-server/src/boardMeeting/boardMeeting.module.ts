import { Module } from "@nestjs/common";
import { BoardMeetingModuleBase } from "./base/boardMeeting.module.base";
import { BoardMeetingService } from "./boardMeeting.service";
import { BoardMeetingController } from "./boardMeeting.controller";
import { BoardMeetingResolver } from "./boardMeeting.resolver";

@Module({
  imports: [BoardMeetingModuleBase],
  controllers: [BoardMeetingController],
  providers: [BoardMeetingService, BoardMeetingResolver],
  exports: [BoardMeetingService],
})
export class BoardMeetingModule {}
