# Styles Architecture

`global.css` is the only stylesheet imported by `BaseLayout.astro`. It is an entrypoint that defines the cascade order through CSS imports.

- `base.css`: design tokens, resets, base elements, shared container helpers.
- `ui.css`: reusable UI primitives such as buttons.
- `layout/header.css`: site header and navigation styles.
- `sections/home.css`: reusable homepage and section blocks.
- `pages/service.css`: page-level and service-page layouts.
- `layout/footer.css`: site footer styles.
- `responsive.css`: shared responsive overrides, kept last in the cascade.

When adding a component, keep data in `src/data`, markup in `src/components`, and put CSS in the closest matching stylesheet instead of growing `global.css`.
