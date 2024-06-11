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
import { DataTable } from "./DataTable";
import { DataTableCountArgs } from "./DataTableCountArgs";
import { DataTableFindManyArgs } from "./DataTableFindManyArgs";
import { DataTableFindUniqueArgs } from "./DataTableFindUniqueArgs";
import { DeleteDataTableArgs } from "./DeleteDataTableArgs";
import { DataTableService } from "../dataTable.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataTable)
export class DataTableResolverBase {
  constructor(
    protected readonly service: DataTableService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DataTable",
    action: "read",
    possession: "any",
  })
  async _dataTablesMeta(
    @graphql.Args() args: DataTableCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DataTable])
  @nestAccessControl.UseRoles({
    resource: "DataTable",
    action: "read",
    possession: "any",
  })
  async dataTables(
    @graphql.Args() args: DataTableFindManyArgs
  ): Promise<DataTable[]> {
    return this.service.dataTables(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DataTable, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DataTable",
    action: "read",
    possession: "own",
  })
  async dataTable(
    @graphql.Args() args: DataTableFindUniqueArgs
  ): Promise<DataTable | null> {
    const result = await this.service.dataTable(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DataTable)
  @nestAccessControl.UseRoles({
    resource: "DataTable",
    action: "delete",
    possession: "any",
  })
  async deleteDataTable(
    @graphql.Args() args: DeleteDataTableArgs
  ): Promise<DataTable | null> {
    try {
      return await this.service.deleteDataTable(args);
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
