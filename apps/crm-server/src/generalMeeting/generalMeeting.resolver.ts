import * as graphql from "@nestjs/graphql";
import { GeneralMeetingResolverBase } from "./base/generalMeeting.resolver.base";
import { GeneralMeeting } from "./base/GeneralMeeting";
import { GeneralMeetingService } from "./generalMeeting.service";

@graphql.Resolver(() => GeneralMeeting)
export class GeneralMeetingResolver extends GeneralMeetingResolverBase {
  constructor(protected readonly service: GeneralMeetingService) {
    super(service);
  }
}
