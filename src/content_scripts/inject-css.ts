if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
  window.browser = window.chrome;
}

browser.storage.sync.get((settings: any) => {
  if (browser.runtime.lastError) {
    console.error(`Error during settings restoration: `, browser.runtime.lastError);
  }
  if (settings.hasOwnProperty("largeFont") ? settings.largeFont : true) {
    browser.runtime.sendMessage("inject-large-font");
  }
});
