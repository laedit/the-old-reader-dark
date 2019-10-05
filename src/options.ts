if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    window.browser = window.chrome;
}

function saveOptions(): void {
    const settings: { largeFont: boolean } = {
        largeFont: (<HTMLInputElement>document.getElementById("large-font"))!.checked,
    };

    browser.storage.sync.set(settings, () => {
        if (browser.runtime.lastError) {
            console.error(`Error during settings save: `, browser.runtime.lastError);
        }
    });
}

function restoreOptions(): void {
    browser.storage.sync.get(settings => {
        if (browser.runtime.lastError) {
            console.error(`Error during settings restoration: `, browser.runtime.lastError);
        }

        (<HTMLInputElement>document.getElementById("large-font"))!.checked = settings.hasOwnProperty("largeFont")
            ? settings.largeFont
            : true;
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);

document.getElementById("large-font")!.addEventListener("change", saveOptions);
