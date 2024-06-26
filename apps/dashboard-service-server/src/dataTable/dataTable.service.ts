import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataTableServiceBase } from "./base/dataTable.service.base";

@Injectable()
export class DataTableService extends DataTableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
