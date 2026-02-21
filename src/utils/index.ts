import { HandlerRequest } from "../notion-api/types.js";

export const getNotionToken = (c: HandlerRequest) => {
  const fromContext = (c.env as { NOTION_TOKEN?: string } | undefined)?.NOTION_TOKEN;
  const fromProcess =
    typeof process !== "undefined" ? process.env?.NOTION_TOKEN : undefined;
  const fromHeader = (c.req.header("Authorization") || "").split("Bearer ")[1];
  return fromContext || fromProcess || fromHeader || undefined;
};
