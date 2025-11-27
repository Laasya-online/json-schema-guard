[![Publish to npm on tag](https://github.com/Laasya-online/json-schema-guard/actions/workflows/publish-npm.yml/badge.svg)](https://github.com/Laasya-online/json-schema-guard/actions/workflows/publish-npm.yml)
[![npm version](https://img.shields.io/npm/v/json-schema-guard)](https://www.npmjs.com/package/json-schema-guard)
[![Node >= 18](https://img.shields.io/badge/node-%3E%3D18-blue)](#)


# json-schema-guard

Validate a JSON file against a JSON Schema (draft 2020-12) using Ajv.

## Install / Run
Once published:
```bash
# run without installing
npx json-schema-guard --json examples/sample.json --schema examples/schema.json

# or install globally
npm i -g json-schema-guard
json-schema-guard --json examples/sample.json --schema examples/schema.json

```
## Quick start
```bash
npx json-schema-guard --json examples/sample.json --schema examples/schema.json
# or (scoped)
npx @<your-npm-username>/json-schema-guard --json examples/sample.json --schema examples/schema.json
```
---

## Add examples (useful for testing + README)
Create a folder and two files:

### `examples/schema.json`
**Path:** `examples/schema.json`
```json
{
  "$schema":"https://json-schema.org/draft/2020-12/schema",
  "type":"object",
  "properties":{
    "target_role":{"type":"string"},
    "top_programming_languages":{"type":"array","items":{"type":"string"},"minItems":3,"maxItems":3},
    "top_skills":{"type":"array","items":{"type":"string"},"minItems":3,"maxItems":3},
    "biggest_skill_gap":{"type":"string"},
    "notes":{"type":"string"}
  },
  "required":["target_role","top_programming_languages","top_skills","biggest_skill_gap"],
  "additionalProperties":false
}
