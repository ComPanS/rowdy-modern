import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../src/pages/HomePage.tsx', import.meta.url), 'utf8')
const invalid = [...source.matchAll(/href=["'](#?)["']/g)]
if (invalid.length > 0) throw new Error('Empty href found in landing page')
if (source.includes('href="#"')) throw new Error('Placeholder link found in landing page')
console.log('Landing links passed: no empty or placeholder hrefs.')
