import { Module } from "@nestjs/common";
import { MembershipTierModule } from "./membershipTier/membershipTier.module";
import { MemberModule } from "./member/member.module";
import { EventModule } from "./event/event.module";
import { MenteeModule } from "./mentee/mentee.module";
import { MentorModule } from "./mentor/mentor.module";
import { DonationModule } from "./donation/donation.module";
import { RaffleModule } from "./raffle/raffle.module";
import { LearningModuleModule } from "./learningModule/learningModule.module";
import { ContactModule } from "./contact/contact.module";
import { WebPageModule } from "./webPage/webPage.module";
import { TicketModule } from "./ticket/ticket.module";
import { CheckInModule } from "./checkIn/checkIn.module";
import { BoardMemberModule } from "./boardMember/boardMember.module";
import { PollModule } from "./poll/poll.module";
import { BoardMeetingModule } from "./boardMeeting/boardMeeting.module";
import { GeneralMeetingModule } from "./generalMeeting/generalMeeting.module";
import { VoteModule } from "./vote/vote.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    MembershipTierModule,
    MemberModule,
    EventModule,
    MenteeModule,
    MentorModule,
    DonationModule,
    RaffleModule,
    LearningModuleModule,
    ContactModule,
    WebPageModule,
    TicketModule,
    CheckInModule,
    BoardMemberModule,
    PollModule,
    BoardMeetingModule,
    GeneralMeetingModule,
    VoteModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
