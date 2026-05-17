# hello-world-target

Test fixture for [n8n-autocoder](../../). This is a tiny, real TypeScript
project that the v0.1 `hello-world` workflow drives end-to-end.

## What it is

- A `node:test` + strict-TypeScript project with a single placeholder export.
- A `.autocoder/dag.json` (schema v1) that defines two behavior tasks:
  1. **B-0001** — add `src/greet.ts` and re-export `greet` from `src/index.ts`.
  2. **B-0002** — add `tests/greet.test.ts` and wire up `npm test`.
- Per-task prompts in `.autocoder/prompts/`.

## Repo layout

This directory is its OWN git repo (independent of the parent `n8n-autocoder`
workspace). The parent's `.gitignore` excludes the inner working tree from
parent tracking. The autocoder workflow clones / fetches from this directory
(via `file://` transport in v0.1, eventually HTTPS once published).

## Expected end state after the autocoder runs

```
src/
  index.ts        ← re-exports greet
  greet.ts        ← created by B-0001
tests/
  greet.test.ts   ← created by B-0002
package.json      ← `test` script added by B-0002
```

## Manual verification

After the workflow completes and the feature branch is checked out:

```sh
npm install
npm test
```

Both `greet("world") === "Hello, world!"` and `greet("") === "Hello, !"`
assertions should pass.

## Initial state typecheck

The v0.1 acceptance requires that `tsc --noEmit` passes on the initial
(pre-autocoder) commit. The placeholder `src/index.ts` is intentionally
trivial for that reason.
