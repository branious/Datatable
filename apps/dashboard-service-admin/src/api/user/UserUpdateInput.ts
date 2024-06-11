import { InputJsonValue } from "../../types";
import { UserDataUpdateManyWithoutUsersInput } from "./UserDataUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userDataItems?: UserDataUpdateManyWithoutUsersInput;
  username?: string;
};
