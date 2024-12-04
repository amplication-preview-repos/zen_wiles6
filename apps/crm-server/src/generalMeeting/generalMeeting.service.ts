import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneralMeetingServiceBase } from "./base/generalMeeting.service.base";

@Injectable()
export class GeneralMeetingService extends GeneralMeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
