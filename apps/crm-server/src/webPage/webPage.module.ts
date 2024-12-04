import { Module } from "@nestjs/common";
import { WebPageModuleBase } from "./base/webPage.module.base";
import { WebPageService } from "./webPage.service";
import { WebPageController } from "./webPage.controller";
import { WebPageResolver } from "./webPage.resolver";

@Module({
  imports: [WebPageModuleBase],
  controllers: [WebPageController],
  providers: [WebPageService, WebPageResolver],
  exports: [WebPageService],
})
export class WebPageModule {}
