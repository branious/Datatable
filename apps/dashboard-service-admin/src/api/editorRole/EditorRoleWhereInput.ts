import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EditorRoleWhereInput = {
  canApproveData?: BooleanNullableFilter;
  canDeleteData?: BooleanNullableFilter;
  id?: StringFilter;
};
