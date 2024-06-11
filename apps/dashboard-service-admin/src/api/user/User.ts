import { JsonValue } from "type-fest";
import { UserData } from "../userData/UserData";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userDataItems?: Array<UserData>;
  username: string;
};
