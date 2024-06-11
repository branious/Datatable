import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDataUpdateInput = {
  data?: InputJsonValue;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
