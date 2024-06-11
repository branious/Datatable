import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const UserRoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="canEditOwnData" source="canEditOwnData" />
        <BooleanInput label="canViewOwnData" source="canViewOwnData" />
      </SimpleForm>
    </Create>
  );
};
