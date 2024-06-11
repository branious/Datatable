import { SortOrder } from "../../util/SortOrder";

export type EditorRoleOrderByInput = {
  canApproveData?: SortOrder;
  canDeleteData?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
