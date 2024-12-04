import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PollTitle } from "../poll/PollTitle";

export const VoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="poll.id" reference="Poll" label="Poll">
          <SelectInput optionText={PollTitle} />
        </ReferenceInput>
        <TextInput label="SelectedOption" multiline source="selectedOption" />
        <TextInput label="Voter" source="voter" />
      </SimpleForm>
    </Create>
  );
};
