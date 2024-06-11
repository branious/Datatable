import { Module } from "@nestjs/common";
import { DataRowModuleBase } from "./base/dataRow.module.base";
import { DataRowService } from "./dataRow.service";
import { DataRowController } from "./dataRow.controller";
import { DataRowResolver } from "./dataRow.resolver";

@Module({
  imports: [DataRowModuleBase],
  controllers: [DataRowController],
  providers: [DataRowService, DataRowResolver],
  exports: [DataRowService],
})
export class DataRowModule {}
