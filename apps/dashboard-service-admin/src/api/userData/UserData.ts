import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserData = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
