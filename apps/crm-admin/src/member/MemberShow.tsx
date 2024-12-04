import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { MEMBER_TITLE_FIELD } from "./MemberTitle";
import { MEMBERSHIPTIER_TITLE_FIELD } from "../membershipTier/MembershipTierTitle";

export const MemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="MembershipTier"
          source="membershiptier.id"
          reference="MembershipTier"
        >
          <TextField source={MEMBERSHIPTIER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="MentorshipStatus" source="mentorshipStatus" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CheckIn"
          target="memberId"
          label="CheckIns"
        >
          <Datagrid rowClick="show">
            <TextField label="CheckInTime" source="checkInTime" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Mentee"
          target="memberId"
          label="Mentees"
        >
          <Datagrid rowClick="show">
            <TextField label="AssignedMentor" source="assignedMentor" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Mentor"
          target="memberId"
          label="Mentors"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Active" source="active" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Specialization" source="specialization" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="memberId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="IssuedAt" source="issuedAt" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
