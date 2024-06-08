import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BoardMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <DateTimeInput label="JoinDate" source="joinDate" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Role" source="role" />
      </SimpleForm>
    </Create>
  );
};
