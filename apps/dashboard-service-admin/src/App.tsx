import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
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
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DashboardService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
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
      </Admin>
    </div>
  );
};

export default App;
