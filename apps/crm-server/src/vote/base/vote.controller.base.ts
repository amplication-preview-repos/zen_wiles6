/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VoteService } from "../vote.service";
import { VoteCreateInput } from "./VoteCreateInput";
import { Vote } from "./Vote";
import { VoteFindManyArgs } from "./VoteFindManyArgs";
import { VoteWhereUniqueInput } from "./VoteWhereUniqueInput";
import { VoteUpdateInput } from "./VoteUpdateInput";

export class VoteControllerBase {
  constructor(protected readonly service: VoteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vote })
  async createVote(@common.Body() data: VoteCreateInput): Promise<Vote> {
    return await this.service.createVote({
      data: {
        ...data,

        poll: data.poll
          ? {
              connect: data.poll,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        poll: {
          select: {
            id: true,
          },
        },

        selectedOption: true,
        updatedAt: true,
        voter: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Vote] })
  @ApiNestedQuery(VoteFindManyArgs)
  async votes(@common.Req() request: Request): Promise<Vote[]> {
    const args = plainToClass(VoteFindManyArgs, request.query);
    return this.service.votes({
      ...args,
      select: {
        createdAt: true,
        id: true,

        poll: {
          select: {
            id: true,
          },
        },

        selectedOption: true,
        updatedAt: true,
        voter: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vote(
    @common.Param() params: VoteWhereUniqueInput
  ): Promise<Vote | null> {
    const result = await this.service.vote({
      where: params,
      select: {
        createdAt: true,
        id: true,

        poll: {
          select: {
            id: true,
          },
        },

        selectedOption: true,
        updatedAt: true,
        voter: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVote(
    @common.Param() params: VoteWhereUniqueInput,
    @common.Body() data: VoteUpdateInput
  ): Promise<Vote | null> {
    try {
      return await this.service.updateVote({
        where: params,
        data: {
          ...data,

          poll: data.poll
            ? {
                connect: data.poll,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          poll: {
            select: {
              id: true,
            },
          },

          selectedOption: true,
          updatedAt: true,
          voter: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVote(
    @common.Param() params: VoteWhereUniqueInput
  ): Promise<Vote | null> {
    try {
      return await this.service.deleteVote({
        where: params,
        select: {
          createdAt: true,
          id: true,

          poll: {
            select: {
              id: true,
            },
          },

          selectedOption: true,
          updatedAt: true,
          voter: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
