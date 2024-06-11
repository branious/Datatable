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
import { UserDataWhereInput } from "./UserDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserDataWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDataWhereInput)
  @IsOptional()
  @Field(() => UserDataWhereInput, {
    nullable: true,
  })
  every?: UserDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserDataWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDataWhereInput)
  @IsOptional()
  @Field(() => UserDataWhereInput, {
    nullable: true,
  })
  some?: UserDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserDataWhereInput,
  })
  @ValidateNested()
  @Type(() => UserDataWhereInput)
  @IsOptional()
  @Field(() => UserDataWhereInput, {
    nullable: true,
  })
  none?: UserDataWhereInput;
}
export { UserDataListRelationFilter as UserDataListRelationFilter };
