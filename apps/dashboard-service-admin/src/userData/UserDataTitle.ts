import { UserData as TUserData } from "../api/userData/UserData";

export const USERDATA_TITLE_FIELD = "id";

export const UserDataTitle = (record: TUserData): string => {
  return record.id?.toString() || String(record.id);
};
