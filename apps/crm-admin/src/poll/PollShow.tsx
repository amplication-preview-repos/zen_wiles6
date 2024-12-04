import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POLL_TITLE_FIELD } from "./PollTitle";

export const PollShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndTime" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="Meeting" source="meeting" />
        <TextField label="Options" source="options" />
        <TextField label="Question" source="question" />
        <TextField label="StartTime" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Vote" target="pollId" label="Votes">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Poll" source="poll.id" reference="Poll">
              <TextField source={POLL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SelectedOption" source="selectedOption" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Voter" source="voter" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
