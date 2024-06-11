import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EditorRoleModuleBase } from "./base/editorRole.module.base";
import { EditorRoleService } from "./editorRole.service";
import { EditorRoleController } from "./editorRole.controller";
import { EditorRoleResolver } from "./editorRole.resolver";

@Module({
  imports: [EditorRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [EditorRoleController],
  providers: [EditorRoleService, EditorRoleResolver],
  exports: [EditorRoleService],
})
export class EditorRoleModule {}
