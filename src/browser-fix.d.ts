interface Window {
    browser: typeof chrome;
}

declare namespace browser.runtime {
    /** This will be defined during an API method callback if there was an error */
    export var lastError: chrome.runtime.LastError | undefined;

    /**
     * Fired when a message is sent from either an extension process or a content script.
     */
    export var onMessage: chrome.runtime.ExtensionMessageEvent;

    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @param responseCallback Optional
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage(message: any, responseCallback?: (response: any) => void): void;
}

declare namespace browser.storage {
    /** Items in the sync storage area are synced using Chrome Sync. */
    export var sync: chrome.storage.SyncStorageArea;
}

declare namespace browser.tabs {
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(details: chrome.tabs.InjectDetails, callback?: Function): void;
}