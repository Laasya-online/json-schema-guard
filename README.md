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
## Usage

json-schema-guard --json <path/to/file.json> --schema <path/to/schema.json>
# exit 0 on success; non-zero on failure


**Commit** to `main`.

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
