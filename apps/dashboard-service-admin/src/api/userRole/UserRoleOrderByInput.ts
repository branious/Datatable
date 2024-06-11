import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  canEditOwnData?: SortOrder;
  canViewOwnData?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
