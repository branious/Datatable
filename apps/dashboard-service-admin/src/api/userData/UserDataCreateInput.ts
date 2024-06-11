import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDataCreateInput = {
  data?: InputJsonValue;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
