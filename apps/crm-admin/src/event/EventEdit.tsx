import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CheckInTitle } from "../checkIn/CheckInTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="checkIns"
          reference="CheckIn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckInTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartTime" source="startTime" />
        <NumberInput label="TicketPrice" source="ticketPrice" />
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
