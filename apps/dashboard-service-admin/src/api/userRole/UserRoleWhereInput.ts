import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserRoleWhereInput = {
  canEditOwnData?: BooleanNullableFilter;
  canViewOwnData?: BooleanNullableFilter;
  id?: StringFilter;
};
