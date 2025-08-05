import { base } from "astro:config/server"

/**
 * 
 * @param parts path parts that form a complete URL, with the base prepended
 * @returns a fully formed relative URL string
 */
export const relPath = (...parts: Array<string>): string => {

    // strips trailing slashes: /base/// -> /base
    const cleanedBase = base.replace(/\/+$/, '');

    // strips all leading and trailing slashes: ///about// -> about
    const cleanedParts = parts.map(p => p.replace(/^\/+|\/+$/g, ''));


    return [cleanedBase, ...cleanedParts].filter(Boolean).join('/');
}
