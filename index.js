#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .usage('$0 --json <file> --schema <file>')
  .option('json',   { type: 'string', demandOption: true, describe: 'Path to JSON file' })
  .option('schema', { type: 'string', demandOption: true, describe: 'Path to JSON Schema file' })
  .strict()
  .help()
  .argv;

function readJSON(p) {
  const txt = fs.readFileSync(path.resolve(p), 'utf8');
  return JSON.parse(txt);
}

try {
  const data   = readJSON(argv.json);
  const schema = readJSON(argv.schema);

  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);
  const validate = ajv.compile(schema);
  const ok = validate(data);

  if (ok) {
    console.log('✅ Valid JSON (matches schema).');
    process.exit(0);
  } else {
    console.error('❌ Validation failed:');
    for (const err of validate.errors ?? []) {
      console.error(`- ${err.instancePath || '(root)'}: ${err.message}`);
    }
    process.exit(1);
  }
} catch (e) {
  console.error('❌ Error:', e.message);
  process.exit(1);
}
