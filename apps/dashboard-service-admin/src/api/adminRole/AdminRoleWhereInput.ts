import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminRoleWhereInput = {
  canDoEverything?: BooleanNullableFilter;
  id?: StringFilter;
};
