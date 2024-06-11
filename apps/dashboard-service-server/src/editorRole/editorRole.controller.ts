import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EditorRoleService } from "./editorRole.service";
import { EditorRoleControllerBase } from "./base/editorRole.controller.base";

@swagger.ApiTags("editorRoles")
@common.Controller("editorRoles")
export class EditorRoleController extends EditorRoleControllerBase {
  constructor(
    protected readonly service: EditorRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
