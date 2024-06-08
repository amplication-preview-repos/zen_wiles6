import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoardMeetingServiceBase } from "./base/boardMeeting.service.base";

@Injectable()
export class BoardMeetingService extends BoardMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
