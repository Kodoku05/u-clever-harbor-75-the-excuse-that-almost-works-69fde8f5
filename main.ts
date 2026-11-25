import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'IT marked me as a leaver. Reinstating me takes three working days.';
if (line.trim().length === 0) {
  throw new Error('Excuse line must not be empty after trimming.');
}
if (line.length > 200) {
  throw new Error('Excuse line must not exceed 200 characters.');
}
if (!line.endsWith('.')) {
  throw new Error('Excuse line must end with a full stop.');
}
mkdirSync('/output', { recursive: true });
const { renameSync } = await import('node:fs');
writeFileSync('/output/entry.txt.tmp', line + '\n', 'utf8');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
console.log(`Wrote ${line.length + 1} characters to /output/entry.txt`);
