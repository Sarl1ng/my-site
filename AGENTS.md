# Project instructions for Codex

## Project

This is an Astro static website for a plumbing and sewer cleaning service website named `prochistka`.

The project must be SEO-friendly, fast, component-based, and easy to extend with many service landing pages.

## Stack

- Astro
- Tailwind CSS if already configured
- TypeScript where useful
- Static output
- No backend at this stage
- No CMS at this stage

## Architecture rules

- Keep pages thin.
- Put reusable UI in `src/components/ui`.
- Put layout components in `src/components/layout`.
- Put page sections in `src/components/sections`.
- Put shared data in `src/data`.
- Use `BaseLayout.astro` for general pages.
- Use `ServiceLayout.astro` for service landing pages.
- Do not duplicate Header, Footer, CTA, LeadForm, FAQ, or service cards across pages.

## SEO rules

- Every page must have a unique title and description.
- Every page must have exactly one h1.
- Preserve existing SEO slugs unless explicitly asked to change them.
- Do not invent fake company facts, reviews, prices, licenses, guarantees, or addresses.
- Use TODO placeholders where real data is missing.
- Add internal links between related services.

## Code quality

- Keep components small and readable.
- Avoid unnecessary JavaScript.
- Avoid unnecessary dependencies.
- Ensure `npm run build` passes.
- Use semantic HTML.
- Add alt text to images.
- Prefer Astro components over client-side frameworks.

## Design rules

- Follow provided screenshots of the old website.
- Do not redesign the site into a generic SaaS landing page.
- The site should look like a practical commercial service website.
- Prioritize mobile usability.
- Make phone and request buttons clearly visible.

## Git workflow

- Do not push directly to main.
- Work in a separate branch.
- Create a Pull Request for review.
- In the PR summary, list changed files, created files, build result, and remaining TODO items.

## Before finishing

Always report:

- changed files;
- created files;
- build result;
- remaining TODO items;
- missing information required from the site owner.
