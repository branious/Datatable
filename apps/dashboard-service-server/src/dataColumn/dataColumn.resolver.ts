import * as graphql from "@nestjs/graphql";
import { DataColumnResolverBase } from "./base/dataColumn.resolver.base";
import { DataColumn } from "./base/DataColumn";
import { DataColumnService } from "./dataColumn.service";

@graphql.Resolver(() => DataColumn)
export class DataColumnResolver extends DataColumnResolverBase {
  constructor(protected readonly service: DataColumnService) {
    super(service);
  }
}
