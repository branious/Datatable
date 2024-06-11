import * as graphql from "@nestjs/graphql";
import { DataRowResolverBase } from "./base/dataRow.resolver.base";
import { DataRow } from "./base/DataRow";
import { DataRowService } from "./dataRow.service";

@graphql.Resolver(() => DataRow)
export class DataRowResolver extends DataRowResolverBase {
  constructor(protected readonly service: DataRowService) {
    super(service);
  }
}
