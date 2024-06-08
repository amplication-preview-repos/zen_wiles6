import * as graphql from "@nestjs/graphql";
import { WebPageResolverBase } from "./base/webPage.resolver.base";
import { WebPage } from "./base/WebPage";
import { WebPageService } from "./webPage.service";

@graphql.Resolver(() => WebPage)
export class WebPageResolver extends WebPageResolverBase {
  constructor(protected readonly service: WebPageService) {
    super(service);
  }
}
