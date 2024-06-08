import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoardMemberService } from "./boardMember.service";
import { BoardMemberControllerBase } from "./base/boardMember.controller.base";

@swagger.ApiTags("boardMembers")
@common.Controller("boardMembers")
export class BoardMemberController extends BoardMemberControllerBase {
  constructor(protected readonly service: BoardMemberService) {
    super(service);
  }
}
