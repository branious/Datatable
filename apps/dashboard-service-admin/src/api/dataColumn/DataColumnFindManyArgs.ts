import { DataColumnWhereInput } from "./DataColumnWhereInput";
import { DataColumnOrderByInput } from "./DataColumnOrderByInput";

export type DataColumnFindManyArgs = {
  where?: DataColumnWhereInput;
  orderBy?: Array<DataColumnOrderByInput>;
  skip?: number;
  take?: number;
};
