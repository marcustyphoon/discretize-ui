import prettier from 'prettier';
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as url from 'node:url';

export const API_LANGUAGES = ['de', 'en', 'es', 'fr', 'zh'];
const GW2_API_URL = 'https://api.guildwars2.com';

const AUTOGENERATE_HEADER = `
// This file is autogenerated by /generate_from_api.mjs
// Do not edit this file directly - it will be overwritten

`;

let prettier_options = null;
export async function initPrettier() {
  prettier_options = await prettier.resolveConfig(
    url.fileURLToPath(import.meta.url),
  );
}
export async function writeSource(filepath, content) {
  filepath = path.join('src', filepath);
  let prettied = await prettier.format(AUTOGENERATE_HEADER + content, {
    ...prettier_options,
    filepath,
  });
  console.log('Generating', filepath);
  fs.writeFileSync(filepath, prettied, 'utf8');
}

const FETCH_OPTIONS = {
  method: 'GET',
  mode: 'cors',
  credentials: 'omit',
  redirect: 'error',
};

export async function fetch_api(path) {
  let url = GW2_API_URL + path;
  console.log('Fetching', url);
  let retries = 3;
  let res;
  while (retries > 0) {
    try {
      res = await fetch(url, FETCH_OPTIONS);
      break;
    } catch (e) {
      console.log(e);
      if (retries <= 1) throw e;
    }
    retries--;
  }
  if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
  let json = await res.json();
  return json;
}

export function compare_strings(a, b) {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}
