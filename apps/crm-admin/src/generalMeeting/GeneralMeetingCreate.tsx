import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const GeneralMeetingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Agenda" multiline source="agenda" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Location" source="location" />
        <SelectInput
          source="meetingType"
          label="MeetingType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Minutes" multiline source="minutes" />
        <DateTimeInput label="StartTime" source="startTime" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
