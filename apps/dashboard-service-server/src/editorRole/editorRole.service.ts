import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EditorRoleServiceBase } from "./base/editorRole.service.base";

@Injectable()
export class EditorRoleService extends EditorRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
