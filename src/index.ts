import puppeteer from "puppeteer";
import { openPopup, waitForExtensionBackground } from "./utils";

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-extensions-except=demo-extension",
      "--load-extension=demo-extension",
    ],
  });

  const backgroundPage = await waitForExtensionBackground(browser);
  const popup = await openPopup(browser, backgroundPage, "/popup.html");

  const button = await popup.waitForSelector("button");

  setTimeout(async () => {
    await button.click();
  }, 3 * 1000);
}

run();
