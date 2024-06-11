/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DataColumn as PrismaDataColumn } from "@prisma/client";

export class DataColumnServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DataColumnCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dataColumn.count(args);
  }

  async dataColumns<T extends Prisma.DataColumnFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataColumnFindManyArgs>
  ): Promise<PrismaDataColumn[]> {
    return this.prisma.dataColumn.findMany<Prisma.DataColumnFindManyArgs>(args);
  }
  async dataColumn<T extends Prisma.DataColumnFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataColumnFindUniqueArgs>
  ): Promise<PrismaDataColumn | null> {
    return this.prisma.dataColumn.findUnique(args);
  }
  async createDataColumn<T extends Prisma.DataColumnCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataColumnCreateArgs>
  ): Promise<PrismaDataColumn> {
    return this.prisma.dataColumn.create<T>(args);
  }
  async updateDataColumn<T extends Prisma.DataColumnUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataColumnUpdateArgs>
  ): Promise<PrismaDataColumn> {
    return this.prisma.dataColumn.update<T>(args);
  }
  async deleteDataColumn<T extends Prisma.DataColumnDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DataColumnDeleteArgs>
  ): Promise<PrismaDataColumn> {
    return this.prisma.dataColumn.delete(args);
  }
}
