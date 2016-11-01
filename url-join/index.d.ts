// Type definitions for url-join v0.8.3
// Project: https://github.com/jfromaniello/url-join
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Join all arguments together and normalize the resulting url.
 * This works similar to path.join but you shouldn't use path.join for urls since it will work different depending of the operative systems but also doesn't work for some cases.
 */	
declare function urljoin(...parts: string[]): string;

export = urljoin;