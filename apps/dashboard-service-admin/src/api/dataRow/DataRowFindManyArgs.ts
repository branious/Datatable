import { DataRowWhereInput } from "./DataRowWhereInput";
import { DataRowOrderByInput } from "./DataRowOrderByInput";

export type DataRowFindManyArgs = {
  where?: DataRowWhereInput;
  orderBy?: Array<DataRowOrderByInput>;
  skip?: number;
  take?: number;
};
