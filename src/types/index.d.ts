import puppeteer from "puppeteer";

declare module "puppeteer" {
  export interface Target {
    _isPageTargetCallback: (
      target: puppeteer.Protocol.Target.TargetInfo
    ) => boolean;
  }
}
