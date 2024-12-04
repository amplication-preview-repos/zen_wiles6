import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CheckInTitle } from "../checkIn/CheckInTitle";
import { MembershipTierTitle } from "../membershipTier/MembershipTierTitle";
import { MenteeTitle } from "../mentee/MenteeTitle";
import { MentorTitle } from "../mentor/MentorTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const MemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceArrayInput
          source="checkIns"
          reference="CheckIn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckInTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="membershipTier.id"
          reference="MembershipTier"
          label="MembershipTier"
        >
          <SelectInput optionText={MembershipTierTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mentees"
          reference="Mentee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MenteeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mentors"
          reference="Mentor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MentorTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="mentorshipStatus"
          label="MentorshipStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
