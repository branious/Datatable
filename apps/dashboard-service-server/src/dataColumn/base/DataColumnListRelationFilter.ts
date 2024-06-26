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
import { DataColumnWhereInput } from "./DataColumnWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DataColumnListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DataColumnWhereInput,
  })
  @ValidateNested()
  @Type(() => DataColumnWhereInput)
  @IsOptional()
  @Field(() => DataColumnWhereInput, {
    nullable: true,
  })
  every?: DataColumnWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataColumnWhereInput,
  })
  @ValidateNested()
  @Type(() => DataColumnWhereInput)
  @IsOptional()
  @Field(() => DataColumnWhereInput, {
    nullable: true,
  })
  some?: DataColumnWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataColumnWhereInput,
  })
  @ValidateNested()
  @Type(() => DataColumnWhereInput)
  @IsOptional()
  @Field(() => DataColumnWhereInput, {
    nullable: true,
  })
  none?: DataColumnWhereInput;
}
export { DataColumnListRelationFilter as DataColumnListRelationFilter };
