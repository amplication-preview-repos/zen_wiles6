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

import { MEMBERSHIPTIER_TITLE_FIELD } from "./MembershipTierTitle";

export const MembershipTierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Fee" source="fee" />
        <TextField label="ID" source="id" />
        <TextField label="TierName" source="tierName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Member"
          target="membershipTierId"
          label="Members"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
