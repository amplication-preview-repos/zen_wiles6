import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebPageServiceBase } from "./base/webPage.service.base";

@Injectable()
export class WebPageService extends WebPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
