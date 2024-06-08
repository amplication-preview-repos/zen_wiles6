import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BoardMeetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Agenda" multiline source="agenda" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Location" source="location" />
        <TextInput label="Minutes" multiline source="minutes" />
        <DateTimeInput label="StartTime" source="startTime" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
