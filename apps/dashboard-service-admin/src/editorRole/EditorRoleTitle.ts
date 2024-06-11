import { EditorRole as TEditorRole } from "../api/editorRole/EditorRole";

export const EDITORROLE_TITLE_FIELD = "id";

export const EditorRoleTitle = (record: TEditorRole): string => {
  return record.id?.toString() || String(record.id);
};
