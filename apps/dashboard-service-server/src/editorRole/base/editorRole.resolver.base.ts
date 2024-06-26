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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { EditorRole } from "./EditorRole";
import { EditorRoleCountArgs } from "./EditorRoleCountArgs";
import { EditorRoleFindManyArgs } from "./EditorRoleFindManyArgs";
import { EditorRoleFindUniqueArgs } from "./EditorRoleFindUniqueArgs";
import { CreateEditorRoleArgs } from "./CreateEditorRoleArgs";
import { UpdateEditorRoleArgs } from "./UpdateEditorRoleArgs";
import { DeleteEditorRoleArgs } from "./DeleteEditorRoleArgs";
import { EditorRoleService } from "../editorRole.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EditorRole)
export class EditorRoleResolverBase {
  constructor(
    protected readonly service: EditorRoleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EditorRole",
    action: "read",
    possession: "any",
  })
  async _editorRolesMeta(
    @graphql.Args() args: EditorRoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EditorRole])
  @nestAccessControl.UseRoles({
    resource: "EditorRole",
    action: "read",
    possession: "any",
  })
  async editorRoles(
    @graphql.Args() args: EditorRoleFindManyArgs
  ): Promise<EditorRole[]> {
    return this.service.editorRoles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EditorRole, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EditorRole",
    action: "read",
    possession: "own",
  })
  async editorRole(
    @graphql.Args() args: EditorRoleFindUniqueArgs
  ): Promise<EditorRole | null> {
    const result = await this.service.editorRole(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EditorRole)
  @nestAccessControl.UseRoles({
    resource: "EditorRole",
    action: "create",
    possession: "any",
  })
  async createEditorRole(
    @graphql.Args() args: CreateEditorRoleArgs
  ): Promise<EditorRole> {
    return await this.service.createEditorRole({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EditorRole)
  @nestAccessControl.UseRoles({
    resource: "EditorRole",
    action: "update",
    possession: "any",
  })
  async updateEditorRole(
    @graphql.Args() args: UpdateEditorRoleArgs
  ): Promise<EditorRole | null> {
    try {
      return await this.service.updateEditorRole({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => EditorRole)
  @nestAccessControl.UseRoles({
    resource: "EditorRole",
    action: "delete",
    possession: "any",
  })
  async deleteEditorRole(
    @graphql.Args() args: DeleteEditorRoleArgs
  ): Promise<EditorRole | null> {
    try {
      return await this.service.deleteEditorRole(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
