/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RaffleWhereInput } from "./RaffleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RaffleOrderByInput } from "./RaffleOrderByInput";

@ArgsType()
class RaffleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RaffleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RaffleWhereInput, { nullable: true })
  @Type(() => RaffleWhereInput)
  where?: RaffleWhereInput;

  @ApiProperty({
    required: false,
    type: [RaffleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RaffleOrderByInput], { nullable: true })
  @Type(() => RaffleOrderByInput)
  orderBy?: Array<RaffleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RaffleFindManyArgs as RaffleFindManyArgs };
