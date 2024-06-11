import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const UserRoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="canEditOwnData" source="canEditOwnData" />
        <BooleanInput label="canViewOwnData" source="canViewOwnData" />
      </SimpleForm>
    </Edit>
  );
};
