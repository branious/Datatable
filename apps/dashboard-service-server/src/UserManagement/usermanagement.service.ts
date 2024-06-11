import { Injectable } from "@nestjs/common";
import { ApproveUserDataInput } from "../userManagement/ApproveUserDataInput";
import { UserDataOutput } from "../userManagement/UserDataOutput";
import { CreateUserDataInput } from "../userManagement/CreateUserDataInput";
import { DeleteUserDataInput } from "../userManagement/DeleteUserDataInput";

@Injectable()
export class UserManagementService {
  constructor() {}
  async ApproveUserData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ApproveUserDataAction(args: ApproveUserDataInput): Promise<UserDataOutput> {
    throw new Error("Not implemented");
  }
  async CreateUserData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateUserDataAction(args: CreateUserDataInput): Promise<UserDataOutput> {
    throw new Error("Not implemented");
  }
  async DeleteUserData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteUserDataAction(args: DeleteUserDataInput): Promise<UserDataOutput> {
    throw new Error("Not implemented");
  }
  async GetUserData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetUserDataAction(args: CreateUserDataInput): Promise<UserDataOutput> {
    throw new Error("Not implemented");
  }
}
