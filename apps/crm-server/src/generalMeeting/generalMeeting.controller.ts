import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneralMeetingService } from "./generalMeeting.service";
import { GeneralMeetingControllerBase } from "./base/generalMeeting.controller.base";

@swagger.ApiTags("generalMeetings")
@common.Controller("generalMeetings")
export class GeneralMeetingController extends GeneralMeetingControllerBase {
  constructor(protected readonly service: GeneralMeetingService) {
    super(service);
  }
}
