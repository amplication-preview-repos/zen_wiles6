import { Module } from "@nestjs/common";
import { BoardMemberModuleBase } from "./base/boardMember.module.base";
import { BoardMemberService } from "./boardMember.service";
import { BoardMemberController } from "./boardMember.controller";
import { BoardMemberResolver } from "./boardMember.resolver";

@Module({
  imports: [BoardMemberModuleBase],
  controllers: [BoardMemberController],
  providers: [BoardMemberService, BoardMemberResolver],
  exports: [BoardMemberService],
})
export class BoardMemberModule {}
