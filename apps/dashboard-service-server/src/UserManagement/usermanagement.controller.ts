import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { CreateUserDataInput } from "../userManagement/CreateUserDataInput";
import { UserDataOutput } from "../userManagement/UserDataOutput";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Get("/:id/approve-user-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApproveUserData(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<string> {
        return this.service.ApproveUserData(body);
      }

  @common.Post("/user-data/approve")
  @swagger.ApiOkResponse({
    type: UserDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApproveUserDataAction(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<UserDataOutput> {
        return this.service.ApproveUserDataAction(body);
      }

  @common.Get("/:id/create-user-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUserData(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<string> {
        return this.service.CreateUserData(body);
      }

  @common.Post("/user-data/create")
  @swagger.ApiOkResponse({
    type: UserDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUserDataAction(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<UserDataOutput> {
        return this.service.CreateUserDataAction(body);
      }

  @common.Get("/:id/delete-user-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteUserData(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<string> {
        return this.service.DeleteUserData(body);
      }

  @common.Delete("/user-data/delete")
  @swagger.ApiOkResponse({
    type: UserDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteUserDataAction(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<UserDataOutput> {
        return this.service.DeleteUserDataAction(body);
      }

  @common.Get("/:id/get-user-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserData(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<string> {
        return this.service.GetUserData(body);
      }

  @common.Get("/user-data/view")
  @swagger.ApiOkResponse({
    type: UserDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserDataAction(
    @common.Body()
    body: CreateUserDataInput
  ): Promise<UserDataOutput> {
        return this.service.GetUserDataAction(body);
      }
}
