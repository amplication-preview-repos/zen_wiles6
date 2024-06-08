import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MembershipTierList } from "./membershipTier/MembershipTierList";
import { MembershipTierCreate } from "./membershipTier/MembershipTierCreate";
import { MembershipTierEdit } from "./membershipTier/MembershipTierEdit";
import { MembershipTierShow } from "./membershipTier/MembershipTierShow";
import { MemberList } from "./member/MemberList";
import { MemberCreate } from "./member/MemberCreate";
import { MemberEdit } from "./member/MemberEdit";
import { MemberShow } from "./member/MemberShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { MenteeList } from "./mentee/MenteeList";
import { MenteeCreate } from "./mentee/MenteeCreate";
import { MenteeEdit } from "./mentee/MenteeEdit";
import { MenteeShow } from "./mentee/MenteeShow";
import { MentorList } from "./mentor/MentorList";
import { MentorCreate } from "./mentor/MentorCreate";
import { MentorEdit } from "./mentor/MentorEdit";
import { MentorShow } from "./mentor/MentorShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
import { RaffleList } from "./raffle/RaffleList";
import { RaffleCreate } from "./raffle/RaffleCreate";
import { RaffleEdit } from "./raffle/RaffleEdit";
import { RaffleShow } from "./raffle/RaffleShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { LearningModuleList } from "./learningModule/LearningModuleList";
import { LearningModuleCreate } from "./learningModule/LearningModuleCreate";
import { LearningModuleEdit } from "./learningModule/LearningModuleEdit";
import { LearningModuleShow } from "./learningModule/LearningModuleShow";
import { WebPageList } from "./webPage/WebPageList";
import { WebPageCreate } from "./webPage/WebPageCreate";
import { WebPageEdit } from "./webPage/WebPageEdit";
import { WebPageShow } from "./webPage/WebPageShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { CheckInList } from "./checkIn/CheckInList";
import { CheckInCreate } from "./checkIn/CheckInCreate";
import { CheckInEdit } from "./checkIn/CheckInEdit";
import { CheckInShow } from "./checkIn/CheckInShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MembershipTier"
          list={MembershipTierList}
          edit={MembershipTierEdit}
          create={MembershipTierCreate}
          show={MembershipTierShow}
        />
        <Resource
          name="Member"
          list={MemberList}
          edit={MemberEdit}
          create={MemberCreate}
          show={MemberShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Mentee"
          list={MenteeList}
          edit={MenteeEdit}
          create={MenteeCreate}
          show={MenteeShow}
        />
        <Resource
          name="Mentor"
          list={MentorList}
          edit={MentorEdit}
          create={MentorCreate}
          show={MentorShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
        <Resource
          name="Raffle"
          list={RaffleList}
          edit={RaffleEdit}
          create={RaffleCreate}
          show={RaffleShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="LearningModule"
          list={LearningModuleList}
          edit={LearningModuleEdit}
          create={LearningModuleCreate}
          show={LearningModuleShow}
        />
        <Resource
          name="WebPage"
          list={WebPageList}
          edit={WebPageEdit}
          create={WebPageCreate}
          show={WebPageShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="CheckIn"
          list={CheckInList}
          edit={CheckInEdit}
          create={CheckInCreate}
          show={CheckInShow}
        />
      </Admin>
    </div>
  );
};

export default App;
