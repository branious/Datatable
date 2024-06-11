import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const EditorRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="canApproveData" source="canApproveData" />
        <BooleanInput label="canDeleteData" source="canDeleteData" />
      </SimpleForm>
    </Create>
  );
};
