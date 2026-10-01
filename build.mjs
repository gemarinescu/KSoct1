import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const out = 'public';
const files = ['index.html', 'styles.css', 'script.js', '_headers'];

if (existsSync(out)) rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const file of files) cpSync(file, join(out, file));
console.log(`Built ${files.length} files into ${out}/`);
