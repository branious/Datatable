import { DataColumn as TDataColumn } from "../api/dataColumn/DataColumn";

export const DATACOLUMN_TITLE_FIELD = "id";

export const DataColumnTitle = (record: TDataColumn): string => {
  return record.id?.toString() || String(record.id);
};
