import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POLL_TITLE_FIELD } from "../poll/PollTitle";

export const VoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Votes"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
