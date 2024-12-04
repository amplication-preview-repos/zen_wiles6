import * as graphql from "@nestjs/graphql";
import { BoardMeetingResolverBase } from "./base/boardMeeting.resolver.base";
import { BoardMeeting } from "./base/BoardMeeting";
import { BoardMeetingService } from "./boardMeeting.service";

@graphql.Resolver(() => BoardMeeting)
export class BoardMeetingResolver extends BoardMeetingResolverBase {
  constructor(protected readonly service: BoardMeetingService) {
    super(service);
  }
}
