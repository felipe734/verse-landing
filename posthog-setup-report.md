<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Verse Host landing page. Here is a summary of every change made:

- **`instrumentation-client.ts`** (new) — Client-side PostHog initialization using the Next.js 15.3+ recommended approach. Initializes via `/ingest` reverse proxy with exception capture enabled.
- **`next.config.mjs`** (updated) — Added `/ingest` rewrites to proxy PostHog requests through the Next.js server, improving ad-blocker resilience. Also set `skipTrailingSlashRedirect: true`.
- **`src/lib/posthog-server.ts`** (new) — Singleton `posthog-node` client for server-side event capture in API routes.
- **`.env.local`** (updated) — Set `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- **`package.json`** — `posthog-node` added as a dependency (installed via npm).

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks "Solicitar Chequeo" in the Hero section | `src/components/Hero.tsx` |
| `whatsapp_clicked` | User clicks a WhatsApp link (hero or floating button), with `location` property | `src/components/Hero.tsx`, `src/components/FloatingWhatsApp.tsx` |
| `navbar_cta_clicked` | User clicks "Quiero revisar mi caso" in the Navbar, with `location` (desktop / mobile_menu) | `src/components/Navbar.tsx` |
| `faq_question_expanded` | User expands a FAQ accordion item, with `question` property | `src/components/FAQ.tsx` |
| `chequeo_form_submitted` | User successfully submits the Chequeo form (key conversion event), with `property_type`, `has_location`, `has_details` | `src/components/CTAForm.tsx` |
| `chequeo_form_error` | Form submission fails due to a network error | `src/components/CTAForm.tsx` |
| `chequeo_submitted` *(server-side)* | API route: Airtable record created successfully. Uses WhatsApp number as `distinctId` for cross-domain correlation | `src/app/api/chequeo/route.ts` |

## Next steps

We've built a dashboard and four insights to monitor user behavior from day one:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/339483/dashboard/1359503
  - **Conversion Funnel: CTA → Chequeo Submission**: https://us.posthog.com/project/339483/insights/LH4xjyWk
  - **Lead Generation: Key CTAs over time**: https://us.posthog.com/project/339483/insights/zRB34kCp
  - **FAQ Engagement: Top Questions**: https://us.posthog.com/project/339483/insights/QlmACI2a
  - **WhatsApp Clicks by Source**: https://us.posthog.com/project/339483/insights/hl6suOeA

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
