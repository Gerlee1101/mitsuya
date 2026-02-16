## Copilot / AI Agent Instructions for this Repository

Summary
- This is a Next.js (App Router) landing page using Tailwind CSS, shadcn-style UI primitives, Radix primitives wrappers, and `next-themes` for theming. Aim: make minimal, idiomatic changes that follow existing UI patterns.

Big picture
- App root: `src/app/layout.tsx` injects `Header` globally; individual pages live in `src/app`.
- UI primitives: `src/components/ui/*` are thin wrappers around Radix primitives and use `cn` + `cva` for consistent styling. Follow these patterns when adding components.
- Shared utilities: `src/lib/utils.ts` exports `cn(...)` which wraps `clsx` + `tailwind-merge` — use it for class merging.
- Small local components: `src/_component/*` contains app-specific pieces (e.g. `Header.tsx`, `ModeToggle.tsx`). Prefer adding app-only components here.

Dev commands
- Run dev server: `npm run dev` (also supports `yarn dev`, `pnpm dev`, `bun dev`).
- Build: `npm run build`
- Start production: `npm run start`

Project-specific conventions
- Path alias: imports use `@/` mapped to `src/` (see `tsconfig.json`); use `@/` for intra-repo imports.
- Client vs Server: files that use browser APIs or hooks include `"use client"` at top (see `ModeToggle.tsx`). Keep server components free of client-only hooks.
- Data-slot attributes: UI wrappers set `data-slot` and `data-variant` attributes on elements (see `src/components/ui/dropdown-menu.tsx`). Preserve these when extending components to keep consistent selectors.
- cva + VariantProps: Buttons and other primitives use `class-variance-authority` (`cva`) to expose `variant` and `size` props (see `src/components/ui/button.tsx`). Follow the same API shape when creating new primitives.
- Wrapping Radix: UI components mostly re-export Radix primitives while adding `data-slot` and Tailwind classes. Keep wrappers thin and forward props (use `...props`).

Styling notes
- Tailwind utility-first classes are used everywhere. Use the `cn(...)` helper for conditional classes.
- Fonts: `next/font` is used in `layout.tsx` (Geist fonts) via CSS variables.

Theming
- `next-themes` is used for theme switching. See `ModeToggle.tsx` for the expected pattern: expose a small UI that calls `setTheme("light"|"dark"|"system")`.

Dependencies / integration points to be aware of
- `radix-ui` primitives are consumed via local wrappers (check `src/components/ui/*`).
- `lucide-react` provides icons.
- `class-variance-authority`, `clsx`, and `tailwind-merge` are used together to build and merge Tailwind variants.
- Next 16 + React 19 — the project enables `reactCompiler` in `next.config.ts`; be cautious if changing compilation settings.

Where to make common changes
- New UI primitive: add to `src/components/ui/`, follow existing wrapper patterns (forward props, add `data-slot`, use `cn` and `cva` where applicable).
- New page: add under `src/app/<route>/page.tsx` or update `src/app/page.tsx`.
- Global styles: `src/app/globals.css`.
- Assets: put images in `public/` and reference by `/image.png`.

Small examples
- Use `cn` when composing classes: `className={cn("px-2", active && "bg-accent")}` (see `src/components/ui/*`).
- Create a varianted component like `Button`: reuse `cva` and export `VariantProps<typeof yourCva>`.
- Forward props to Radix primitives in wrappers and include `data-slot` attributes for consistency.

Testing / debugging tips
- The project has no test scripts; use `npm run dev` and browser devtools to iterate.
- If you add a client component, ensure `"use client"` is the first line.

When updating this file
- Merge existing agent instructions if found. Keep examples and exact file references up-to-date.

If anything here is unclear or you want more examples (e.g., a template for a new UI primitive), tell me what to add.
