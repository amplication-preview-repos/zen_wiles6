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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CheckInListRelationFilter } from "../../checkIn/base/CheckInListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MembershipTierWhereUniqueInput } from "../../membershipTier/base/MembershipTierWhereUniqueInput";
import { MenteeListRelationFilter } from "../../mentee/base/MenteeListRelationFilter";
import { MentorListRelationFilter } from "../../mentor/base/MentorListRelationFilter";
import { EnumMemberMentorshipStatus } from "./EnumMemberMentorshipStatus";
import { TicketListRelationFilter } from "../../ticket/base/TicketListRelationFilter";

@InputType()
class MemberWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => CheckInListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CheckInListRelationFilter)
  @IsOptional()
  @Field(() => CheckInListRelationFilter, {
    nullable: true,
  })
  checkIns?: CheckInListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  membershipTier?: MembershipTierWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MenteeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenteeListRelationFilter)
  @IsOptional()
  @Field(() => MenteeListRelationFilter, {
    nullable: true,
  })
  mentees?: MenteeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MentorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MentorListRelationFilter)
  @IsOptional()
  @Field(() => MentorListRelationFilter, {
    nullable: true,
  })
  mentors?: MentorListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumMemberMentorshipStatus,
  })
  @IsEnum(EnumMemberMentorshipStatus)
  @IsOptional()
  @Field(() => EnumMemberMentorshipStatus, {
    nullable: true,
  })
  mentorshipStatus?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TicketListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TicketListRelationFilter)
  @IsOptional()
  @Field(() => TicketListRelationFilter, {
    nullable: true,
  })
  tickets?: TicketListRelationFilter;
}

export { MemberWhereInput as MemberWhereInput };
