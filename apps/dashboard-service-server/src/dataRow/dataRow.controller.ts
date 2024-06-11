import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataRowService } from "./dataRow.service";
import { DataRowControllerBase } from "./base/dataRow.controller.base";

@swagger.ApiTags("dataRows")
@common.Controller("dataRows")
export class DataRowController extends DataRowControllerBase {
  constructor(protected readonly service: DataRowService) {
    super(service);
  }
}
