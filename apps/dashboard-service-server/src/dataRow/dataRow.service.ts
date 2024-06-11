import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataRowServiceBase } from "./base/dataRow.service.base";

@Injectable()
export class DataRowService extends DataRowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
