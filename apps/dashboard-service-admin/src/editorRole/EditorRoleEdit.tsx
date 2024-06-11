import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const EditorRoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="canApproveData" source="canApproveData" />
        <BooleanInput label="canDeleteData" source="canDeleteData" />
      </SimpleForm>
    </Edit>
  );
};
