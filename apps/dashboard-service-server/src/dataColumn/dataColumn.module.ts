import { Module } from "@nestjs/common";
import { DataColumnModuleBase } from "./base/dataColumn.module.base";
import { DataColumnService } from "./dataColumn.service";
import { DataColumnController } from "./dataColumn.controller";
import { DataColumnResolver } from "./dataColumn.resolver";

@Module({
  imports: [DataColumnModuleBase],
  controllers: [DataColumnController],
  providers: [DataColumnService, DataColumnResolver],
  exports: [DataColumnService],
})
export class DataColumnModule {}
