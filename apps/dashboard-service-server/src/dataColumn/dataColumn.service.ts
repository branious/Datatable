import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataColumnServiceBase } from "./base/dataColumn.service.base";

@Injectable()
export class DataColumnService extends DataColumnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
