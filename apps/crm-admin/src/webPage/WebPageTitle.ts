import { WebPage as TWebPage } from "../api/webPage/WebPage";

export const WEBPAGE_TITLE_FIELD = "title";

export const WebPageTitle = (record: TWebPage): string => {
  return record.title?.toString() || String(record.id);
};
