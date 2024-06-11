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
import { DataColumn } from "./DataColumn";
import { DataColumnCountArgs } from "./DataColumnCountArgs";
import { DataColumnFindManyArgs } from "./DataColumnFindManyArgs";
import { DataColumnFindUniqueArgs } from "./DataColumnFindUniqueArgs";
import { DeleteDataColumnArgs } from "./DeleteDataColumnArgs";
import { DataColumnService } from "../dataColumn.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataColumn)
export class DataColumnResolverBase {
  constructor(
    protected readonly service: DataColumnService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DataColumn",
    action: "read",
    possession: "any",
  })
  async _dataColumnsMeta(
    @graphql.Args() args: DataColumnCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DataColumn])
  @nestAccessControl.UseRoles({
    resource: "DataColumn",
    action: "read",
    possession: "any",
  })
  async dataColumns(
    @graphql.Args() args: DataColumnFindManyArgs
  ): Promise<DataColumn[]> {
    return this.service.dataColumns(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DataColumn, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DataColumn",
    action: "read",
    possession: "own",
  })
  async dataColumn(
    @graphql.Args() args: DataColumnFindUniqueArgs
  ): Promise<DataColumn | null> {
    const result = await this.service.dataColumn(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DataColumn)
  @nestAccessControl.UseRoles({
    resource: "DataColumn",
    action: "delete",
    possession: "any",
  })
  async deleteDataColumn(
    @graphql.Args() args: DeleteDataColumnArgs
  ): Promise<DataColumn | null> {
    try {
      return await this.service.deleteDataColumn(args);
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
