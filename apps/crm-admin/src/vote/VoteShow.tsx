import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { POLL_TITLE_FIELD } from "../poll/PollTitle";

export const VoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Poll" source="poll.id" reference="Poll">
          <TextField source={POLL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="SelectedOption" source="selectedOption" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Voter" source="voter" />
      </SimpleShowLayout>
    </Show>
  );
};
