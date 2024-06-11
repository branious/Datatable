import { EditorRoleWhereInput } from "./EditorRoleWhereInput";
import { EditorRoleOrderByInput } from "./EditorRoleOrderByInput";

export type EditorRoleFindManyArgs = {
  where?: EditorRoleWhereInput;
  orderBy?: Array<EditorRoleOrderByInput>;
  skip?: number;
  take?: number;
};
