import "server-only";
import { PostHog } from "posthog-node";

let posthogClient: PostHog | null = null;

function getPostHogApiKey() {
  return (
    process.env.POSTHOG_PROJECT_TOKEN ??
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
  );
}

function getPostHogHost() {
  return process.env.POSTHOG_HOST ?? process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
}

export function getPostHogClient(): PostHog | null {
  if (!posthogClient) {
    const apiKey = getPostHogApiKey();

    if (!apiKey) {
      return null;
    }

    posthogClient = new PostHog(apiKey, {
      host: getPostHogHost(),
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return posthogClient;
}
