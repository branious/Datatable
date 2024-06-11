import { Module } from "@nestjs/common";
import { DataTableModule } from "./dataTable/dataTable.module";
import { DataRowModule } from "./dataRow/dataRow.module";
import { DataColumnModule } from "./dataColumn/dataColumn.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { UserDataModule } from "./userData/userData.module";
import { EditorRoleModule } from "./editorRole/editorRole.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { AdminRoleModule } from "./adminRole/adminRole.module";
import { UserManagementModule } from "./UserManagement/usermanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    DataTableModule,
    DataRowModule,
    DataColumnModule,
    RoleModule,
    UserModule,
    UserDataModule,
    EditorRoleModule,
    UserRoleModule,
    AdminRoleModule,
    UserManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
