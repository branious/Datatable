import { DataTable as TDataTable } from "../api/dataTable/DataTable";

export const DATATABLE_TITLE_FIELD = "id";

export const DataTableTitle = (record: TDataTable): string => {
  return record.id?.toString() || String(record.id);
};
