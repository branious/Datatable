import { InputJsonValue } from "../../types";
import { UserDataCreateNestedManyWithoutUsersInput } from "./UserDataCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userDataItems?: UserDataCreateNestedManyWithoutUsersInput;
  username: string;
};
