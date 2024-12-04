import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LearningModuleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="CreatedBy" source="createdBy" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
