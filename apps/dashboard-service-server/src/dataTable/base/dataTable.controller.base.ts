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
import { DataTableService } from "../dataTable.service";
import { DataTableCreateInput } from "./DataTableCreateInput";
import { DataTable } from "./DataTable";
import { DataTableFindManyArgs } from "./DataTableFindManyArgs";
import { DataTableWhereUniqueInput } from "./DataTableWhereUniqueInput";
import { DataTableUpdateInput } from "./DataTableUpdateInput";

export class DataTableControllerBase {
  constructor(protected readonly service: DataTableService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DataTable })
  async createDataTable(
    @common.Body() data: DataTableCreateInput
  ): Promise<DataTable> {
    return await this.service.createDataTable({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DataTable] })
  @ApiNestedQuery(DataTableFindManyArgs)
  async dataTables(@common.Req() request: Request): Promise<DataTable[]> {
    const args = plainToClass(DataTableFindManyArgs, request.query);
    return this.service.dataTables({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DataTable })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dataTable(
    @common.Param() params: DataTableWhereUniqueInput
  ): Promise<DataTable | null> {
    const result = await this.service.dataTable({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: DataTable })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDataTable(
    @common.Param() params: DataTableWhereUniqueInput,
    @common.Body() data: DataTableUpdateInput
  ): Promise<DataTable | null> {
    try {
      return await this.service.updateDataTable({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: DataTable })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDataTable(
    @common.Param() params: DataTableWhereUniqueInput
  ): Promise<DataTable | null> {
    try {
      return await this.service.deleteDataTable({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
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