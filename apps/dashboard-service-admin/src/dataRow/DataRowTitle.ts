import { DataRow as TDataRow } from "../api/dataRow/DataRow";

export const DATAROW_TITLE_FIELD = "id";

export const DataRowTitle = (record: TDataRow): string => {
  return record.id?.toString() || String(record.id);
};
