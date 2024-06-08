import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoardMeetingService } from "./boardMeeting.service";
import { BoardMeetingControllerBase } from "./base/boardMeeting.controller.base";

@swagger.ApiTags("boardMeetings")
@common.Controller("boardMeetings")
export class BoardMeetingController extends BoardMeetingControllerBase {
  constructor(protected readonly service: BoardMeetingService) {
    super(service);
  }
}
