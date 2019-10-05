if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    window.browser = window.chrome;
}

browser.runtime.onMessage.addListener((message: string) => {
    if (message === "inject-large-font") {
        browser.tabs.insertCSS({
            file: "content_scripts/large-font.css",
            runAt: "document_start"
        });
    }
});


