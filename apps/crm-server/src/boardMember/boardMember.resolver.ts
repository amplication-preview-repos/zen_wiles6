import * as graphql from "@nestjs/graphql";
import { BoardMemberResolverBase } from "./base/boardMember.resolver.base";
import { BoardMember } from "./base/BoardMember";
import { BoardMemberService } from "./boardMember.service";

@graphql.Resolver(() => BoardMember)
export class BoardMemberResolver extends BoardMemberResolverBase {
  constructor(protected readonly service: BoardMemberService) {
    super(service);
  }
}
