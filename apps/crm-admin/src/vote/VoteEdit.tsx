import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PollTitle } from "../poll/PollTitle";

export const VoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="poll.id" reference="Poll" label="Poll">
          <SelectInput optionText={PollTitle} />
        </ReferenceInput>
        <TextInput label="SelectedOption" multiline source="selectedOption" />
        <TextInput label="Voter" source="voter" />
      </SimpleForm>
    </Edit>
  );
};
