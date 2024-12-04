/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Member } from "./Member";
import { MemberCountArgs } from "./MemberCountArgs";
import { MemberFindManyArgs } from "./MemberFindManyArgs";
import { MemberFindUniqueArgs } from "./MemberFindUniqueArgs";
import { CreateMemberArgs } from "./CreateMemberArgs";
import { UpdateMemberArgs } from "./UpdateMemberArgs";
import { DeleteMemberArgs } from "./DeleteMemberArgs";
import { CheckInFindManyArgs } from "../../checkIn/base/CheckInFindManyArgs";
import { CheckIn } from "../../checkIn/base/CheckIn";
import { MenteeFindManyArgs } from "../../mentee/base/MenteeFindManyArgs";
import { Mentee } from "../../mentee/base/Mentee";
import { MentorFindManyArgs } from "../../mentor/base/MentorFindManyArgs";
import { Mentor } from "../../mentor/base/Mentor";
import { TicketFindManyArgs } from "../../ticket/base/TicketFindManyArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { MembershipTier } from "../../membershipTier/base/MembershipTier";
import { MemberService } from "../member.service";
@graphql.Resolver(() => Member)
export class MemberResolverBase {
  constructor(protected readonly service: MemberService) {}

  async _membersMeta(
    @graphql.Args() args: MemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Member])
  async members(@graphql.Args() args: MemberFindManyArgs): Promise<Member[]> {
    return this.service.members(args);
  }

  @graphql.Query(() => Member, { nullable: true })
  async member(
    @graphql.Args() args: MemberFindUniqueArgs
  ): Promise<Member | null> {
    const result = await this.service.member(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Member)
  async createMember(@graphql.Args() args: CreateMemberArgs): Promise<Member> {
    return await this.service.createMember({
      ...args,
      data: {
        ...args.data,

        membershipTier: args.data.membershipTier
          ? {
              connect: args.data.membershipTier,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Member)
  async updateMember(
    @graphql.Args() args: UpdateMemberArgs
  ): Promise<Member | null> {
    try {
      return await this.service.updateMember({
        ...args,
        data: {
          ...args.data,

          membershipTier: args.data.membershipTier
            ? {
                connect: args.data.membershipTier,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Member)
  async deleteMember(
    @graphql.Args() args: DeleteMemberArgs
  ): Promise<Member | null> {
    try {
      return await this.service.deleteMember(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CheckIn], { name: "checkIns" })
  async findCheckIns(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: CheckInFindManyArgs
  ): Promise<CheckIn[]> {
    const results = await this.service.findCheckIns(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Mentee], { name: "mentees" })
  async findMentees(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: MenteeFindManyArgs
  ): Promise<Mentee[]> {
    const results = await this.service.findMentees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Mentor], { name: "mentors" })
  async findMentors(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: MentorFindManyArgs
  ): Promise<Mentor[]> {
    const results = await this.service.findMentors(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Ticket], { name: "tickets" })
  async findTickets(
    @graphql.Parent() parent: Member,
    @graphql.Args() args: TicketFindManyArgs
  ): Promise<Ticket[]> {
    const results = await this.service.findTickets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => MembershipTier, {
    nullable: true,
    name: "membershipTier",
  })
  async getMembershipTier(
    @graphql.Parent() parent: Member
  ): Promise<MembershipTier | null> {
    const result = await this.service.getMembershipTier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
