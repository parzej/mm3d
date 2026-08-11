# MM3D agent instructions

## Contributor identity

Before changing `CONTEXT.md`, `docs/domain/provenance.yml`, or files in `docs/adr/` during a grilling or domain-modeling session:

1. Read the clone-local identity with `git config --local --get mm3d.contributor`.
2. Accept only contributor IDs declared in `docs/domain/provenance.yml`.
3. If the value is missing, or conflicts with the identity explicitly stated by the user, ask the user which contributor is running the session before editing domain documentation.
4. Never infer contributor identity from writing style, professional subject matter, Git commit authorship, or the contents of a definition.

The clone-local identity is a session default, not proof that every statement belongs to that contributor. An explicit identity stated by the user for the current session takes precedence; report a conflict before writing.

## Domain provenance

Keep `CONTEXT.md` as a shared glossary without authorship or implementation metadata. For every term introduced, explicitly confirmed, or meaningfully revised during a session, update `docs/domain/provenance.yml` in the same change:

- `introduced_by` and `introduced_on` identify the session in which the term first entered the glossary and must not be rewritten.
- Append a contribution with `kind: confirmed` when another contributor accepts the existing definition.
- Append a contribution with `kind: revised` when a contributor changes the meaning of the definition.
- Use the contributor ID, not the display name, in provenance entries.
- Git history corroborates provenance but does not replace it.

## Domain authority

- `goras` must confirm vocabulary about the business, brand, customer relationship, and customer-facing promises.
- `parzej` must confirm vocabulary about software architecture and technical delivery constraints.
- Vocabulary crossing both areas requires confirmation from both contributors.
- Do not resolve a disagreement by replacing one contributor's definition with the other's. Record the conflicting meanings and ask one decision question at a time until a shared canonical definition is confirmed.
- The contributor who introduced a term remains recorded after later confirmations or revisions.

## Publishing preference

- Changes authored or approved by `goras` must be pushed directly to `origin/main` without a pull request, unless `goras` explicitly requests a different publishing workflow for the current session.
