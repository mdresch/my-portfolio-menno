import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8303f61b111f5bb82d15fe583fd152ff@o4509261600522240.ingest.de.sentry.io/4509261635059792",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});