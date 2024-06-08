/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CheckInUpdateManyWithoutMembersInput } from "./CheckInUpdateManyWithoutMembersInput";
import { Type } from "class-transformer";
import { MembershipTierWhereUniqueInput } from "../../membershipTier/base/MembershipTierWhereUniqueInput";
import { MenteeUpdateManyWithoutMembersInput } from "./MenteeUpdateManyWithoutMembersInput";
import { MentorUpdateManyWithoutMembersInput } from "./MentorUpdateManyWithoutMembersInput";
import { EnumMemberMentorshipStatus } from "./EnumMemberMentorshipStatus";
import { TicketUpdateManyWithoutMembersInput } from "./TicketUpdateManyWithoutMembersInput";

@InputType()
class MemberUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: () => CheckInUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => CheckInUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => CheckInUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  checkIns?: CheckInUpdateManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => MembershipTierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MembershipTierWhereUniqueInput)
  @IsOptional()
  @Field(() => MembershipTierWhereUniqueInput, {
    nullable: true,
  })
  membershipTier?: MembershipTierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MenteeUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => MenteeUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => MenteeUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  mentees?: MenteeUpdateManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    type: () => MentorUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => MentorUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => MentorUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  mentors?: MentorUpdateManyWithoutMembersInput;

  @ApiProperty({
    required: false,
    enum: EnumMemberMentorshipStatus,
  })
  @IsEnum(EnumMemberMentorshipStatus)
  @IsOptional()
  @Field(() => EnumMemberMentorshipStatus, {
    nullable: true,
  })
  mentorshipStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutMembersInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutMembersInput, {
    nullable: true,
  })
  tickets?: TicketUpdateManyWithoutMembersInput;
}

export { MemberUpdateInput as MemberUpdateInput };
