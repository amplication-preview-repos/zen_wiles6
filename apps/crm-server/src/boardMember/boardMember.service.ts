import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoardMemberServiceBase } from "./base/boardMember.service.base";

@Injectable()
export class BoardMemberService extends BoardMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
