import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataColumnService } from "./dataColumn.service";
import { DataColumnControllerBase } from "./base/dataColumn.controller.base";

@swagger.ApiTags("dataColumns")
@common.Controller("dataColumns")
export class DataColumnController extends DataColumnControllerBase {
  constructor(protected readonly service: DataColumnService) {
    super(service);
  }
}
