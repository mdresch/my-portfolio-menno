// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8303f61b111f5bb82d15fe583fd152ff@o4509261600522240.ingest.de.sentry.io/4509261635059792",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0.1, // Reduced from 1 to avoid performance issues

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Minimal configuration to avoid conflicts
  integrations: [],
  
  // Disable automatic instrumentation that may conflict with App Router
  autoInstrumentServerFunctions: false,
  autoInstrumentMiddleware: false,
});
