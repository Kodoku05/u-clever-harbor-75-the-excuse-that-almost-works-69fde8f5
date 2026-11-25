import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'IT marked me as a leaver. Reinstating me takes three working days.';
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line + '\n', 'utf8');
