import puppeteer from "puppeteer";
import { getDefaultArgs } from "./args";
import { openPopup, waitForExtensionBackground } from "./utils";

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    args: [...getDefaultArgs(), "--load-extension=demo-extension"],
    ignoreDefaultArgs: true,
  });

  const backgroundPage = await waitForExtensionBackground(browser);
  const popup = await openPopup(browser, backgroundPage, "/popup.html");

  const button = await popup.waitForSelector("button");

  setTimeout(async () => {
    await button.click();
  }, 3 * 1000);
}

run();
