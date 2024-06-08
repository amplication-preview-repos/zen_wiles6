import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebPageService } from "./webPage.service";
import { WebPageControllerBase } from "./base/webPage.controller.base";

@swagger.ApiTags("webPages")
@common.Controller("webPages")
export class WebPageController extends WebPageControllerBase {
  constructor(protected readonly service: WebPageService) {
    super(service);
  }
}
