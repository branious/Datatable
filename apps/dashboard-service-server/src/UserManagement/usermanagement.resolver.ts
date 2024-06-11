import * as graphql from "@nestjs/graphql";
import { ApproveUserDataInput } from "../userManagement/ApproveUserDataInput";
import { UserDataOutput } from "../userManagement/UserDataOutput";
import { CreateUserDataInput } from "../userManagement/CreateUserDataInput";
import { DeleteUserDataInput } from "../userManagement/DeleteUserDataInput";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Query(() => String)
  async ApproveUserData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ApproveUserData(args);
  }

  @graphql.Mutation(() => UserDataOutput)
  async ApproveUserDataAction(
    @graphql.Args()
    args: ApproveUserDataInput
  ): Promise<UserDataOutput> {
    return this.service.ApproveUserDataAction(args);
  }

  @graphql.Query(() => String)
  async CreateUserData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateUserData(args);
  }

  @graphql.Mutation(() => UserDataOutput)
  async CreateUserDataAction(
    @graphql.Args()
    args: CreateUserDataInput
  ): Promise<UserDataOutput> {
    return this.service.CreateUserDataAction(args);
  }

  @graphql.Query(() => String)
  async DeleteUserData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteUserData(args);
  }

  @graphql.Mutation(() => UserDataOutput)
  async DeleteUserDataAction(
    @graphql.Args()
    args: DeleteUserDataInput
  ): Promise<UserDataOutput> {
    return this.service.DeleteUserDataAction(args);
  }

  @graphql.Query(() => String)
  async GetUserData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetUserData(args);
  }

  @graphql.Query(() => UserDataOutput)
  async GetUserDataAction(
    @graphql.Args()
    args: CreateUserDataInput
  ): Promise<UserDataOutput> {
    return this.service.GetUserDataAction(args);
  }
}
