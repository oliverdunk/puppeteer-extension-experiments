"use strict";
chrome.runtime.onInstalled.addListener((details) => {
    console.log("Extension has been installed. Reason:", details.reason);
});
console.log("Hello World!");
