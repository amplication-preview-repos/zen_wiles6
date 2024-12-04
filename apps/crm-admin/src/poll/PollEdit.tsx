import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VoteTitle } from "../vote/VoteTitle";

export const PollEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Meeting" source="meeting" />
        <div />
        <TextInput label="Question" multiline source="question" />
        <DateTimeInput label="StartTime" source="startTime" />
        <ReferenceArrayInput
          source="votes"
          reference="Vote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
