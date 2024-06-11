import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { DataTableList } from "./dataTable/DataTableList";
import { DataTableCreate } from "./dataTable/DataTableCreate";
import { DataTableEdit } from "./dataTable/DataTableEdit";
import { DataTableShow } from "./dataTable/DataTableShow";
import { DataRowList } from "./dataRow/DataRowList";
import { DataRowCreate } from "./dataRow/DataRowCreate";
import { DataRowEdit } from "./dataRow/DataRowEdit";
import { DataRowShow } from "./dataRow/DataRowShow";
import { DataColumnList } from "./dataColumn/DataColumnList";
import { DataColumnCreate } from "./dataColumn/DataColumnCreate";
import { DataColumnEdit } from "./dataColumn/DataColumnEdit";
import { DataColumnShow } from "./dataColumn/DataColumnShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserDataList } from "./userData/UserDataList";
import { UserDataCreate } from "./userData/UserDataCreate";
import { UserDataEdit } from "./userData/UserDataEdit";
import { UserDataShow } from "./userData/UserDataShow";
import { EditorRoleList } from "./editorRole/EditorRoleList";
import { EditorRoleCreate } from "./editorRole/EditorRoleCreate";
import { EditorRoleEdit } from "./editorRole/EditorRoleEdit";
import { EditorRoleShow } from "./editorRole/EditorRoleShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { AdminRoleList } from "./adminRole/AdminRoleList";
import { AdminRoleCreate } from "./adminRole/AdminRoleCreate";
import { AdminRoleEdit } from "./adminRole/AdminRoleEdit";
import { AdminRoleShow } from "./adminRole/AdminRoleShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"DashboardService"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="DataTable"
            list={DataTableList}
            edit={DataTableEdit}
            create={DataTableCreate}
            show={DataTableShow}
          />
          <Resource
            name="DataRow"
            list={DataRowList}
            edit={DataRowEdit}
            create={DataRowCreate}
            show={DataRowShow}
          />
          <Resource
            name="DataColumn"
            list={DataColumnList}
            edit={DataColumnEdit}
            create={DataColumnCreate}
            show={DataColumnShow}
          />
          <Resource
            name="Role"
            list={RoleList}
            edit={RoleEdit}
            create={RoleCreate}
            show={RoleShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="UserData"
            list={UserDataList}
            edit={UserDataEdit}
            create={UserDataCreate}
            show={UserDataShow}
          />
          <Resource
            name="EditorRole"
            list={EditorRoleList}
            edit={EditorRoleEdit}
            create={EditorRoleCreate}
            show={EditorRoleShow}
          />
          <Resource
            name="UserRole"
            list={UserRoleList}
            edit={UserRoleEdit}
            create={UserRoleCreate}
            show={UserRoleShow}
          />
          <Resource
            name="AdminRole"
            list={AdminRoleList}
            edit={AdminRoleEdit}
            create={AdminRoleCreate}
            show={AdminRoleShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
