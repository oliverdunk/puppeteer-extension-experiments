export function getDefaultArgs(): string[] {
  const chromeArguments = [
    "--allow-pre-commit-input",
    "--disable-background-networking",
    "--enable-features=NetworkServiceInProcess2",
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-breakpad",
    "--disable-client-side-phishing-detection",
    "--disable-component-extensions-with-background-pages",
    "--disable-default-apps",
    "--disable-dev-shm-usage",
    // TODO: remove AvoidUnnecessaryBeforeUnloadCheckSync below
    // once crbug.com/1324138 is fixed and released.
    // AcceptCHFrame disabled because of crbug.com/1348106.
    "--disable-features=Translate,BackForwardCache,AcceptCHFrame,AvoidUnnecessaryBeforeUnloadCheckSync",
    "--disable-hang-monitor",
    "--disable-ipc-flooding-protection",
    "--disable-popup-blocking",
    "--disable-prompt-on-repost",
    "--disable-renderer-backgrounding",
    "--disable-sync",
    "--force-color-profile=srgb",
    "--metrics-recording-only",
    "--no-first-run",
    "--enable-automation",
    "--password-store=basic",
    "--use-mock-keychain",
    // TODO(sadym): remove '--enable-blink-features=IdleDetection'
    // once IdleDetection is turned on by default.
    "--enable-blink-features=IdleDetection",
    "--export-tagged-pdf",
  ];

  if (
    chromeArguments.every((arg) => {
      return arg.startsWith("-");
    })
  ) {
    chromeArguments.push("about:blank");
  }
  return chromeArguments;
}
