"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const vscode = require("vscode");
const config_1 = require("../config");
const node_fetch_1 = require("node-fetch");
/**
 * Cache results to avoid VSCode keep refetching
 */
const cachedResults = {};
async function search(keyword, userId) {
    // console.log('>> Search input: ', keyword)
    if (keyword in cachedResults) {
        return Promise.resolve({ results: cachedResults[keyword] });
    }
    const config = (0, config_1.getConfig)();
    /* eslint "no-async-promise-executor": "off" */
    const promise = new Promise(async (resolve, reject) => {
        let results = [];
        let fetchResult;
        try {
            // for (const i in SnippetExtractors) {
            //     const extractor = SnippetExtractors[i];
            //     if (extractor.isEnabled()) {
            //         const urls = await extractor.extractURLFromKeyword(keyword);
            //         for (const y in urls) {
            //             fetchResult = await fetchPageTextContent(urls[y]);
            //             results = results.concat(extractor.extractSnippets(fetchResult));
            //             vscode.window.setStatusBarMessage(`${extractor.name} (${y}/${urls.length}): ${results.length} results`, 2000);
            //             if (results.length >= config.settings.maxResults) {
            //                 break;
            //             }
            //         }
            //         if (results.length >= config.settings.maxResults) {
            //             break;
            //         }
            //     }
            // }
            const response = await (0, node_fetch_1.default)('https://www.useblackbox.io/autocomplete', {
                method: 'POST',
                body: JSON.stringify({
                    userId: userId,
                    textInput: keyword,
                    source: "visual studio"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            const result = await response.json();
            // console.log('API result is: ', JSON.stringify(result, null, 4));
            // console.log('>>API Results: ', result.response)
            var codeReturned = result.response;
            results = [{
                    code: codeReturned,
                    hasCheckMark: false,
                    sourceURL: "",
                    votes: 0
                }];
            cachedResults[keyword] = results;
            resolve({ results });
        }
        catch (err) {
            reject(err);
        }
        // When promise resolved, show finished loading for 5 seconds
        vscode.window.setStatusBarMessage(`Blackbox`);
    });
    vscode.window.setStatusBarMessage(`Blackbox Searching...`, promise);
    return promise;
}
exports.search = search;
