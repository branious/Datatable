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
import { EditorRoleWhereUniqueInput } from "./EditorRoleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EditorRoleUpdateInput } from "./EditorRoleUpdateInput";

@ArgsType()
class UpdateEditorRoleArgs {
  @ApiProperty({
    required: true,
    type: () => EditorRoleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EditorRoleWhereUniqueInput)
  @Field(() => EditorRoleWhereUniqueInput, { nullable: false })
  where!: EditorRoleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EditorRoleUpdateInput,
  })
  @ValidateNested()
  @Type(() => EditorRoleUpdateInput)
  @Field(() => EditorRoleUpdateInput, { nullable: false })
  data!: EditorRoleUpdateInput;
}

export { UpdateEditorRoleArgs as UpdateEditorRoleArgs };
