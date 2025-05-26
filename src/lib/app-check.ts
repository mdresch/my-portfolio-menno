// Firebase App Check utilities
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from 'firebase/app-check';
import { FirebaseApp } from 'firebase/app';

export interface AppCheckConfig {
  isEnabled: boolean;
  provider?: 'recaptcha-v3' | 'recaptcha-enterprise';
  siteKey?: string;
  isTokenAutoRefreshEnabled?: boolean;
}

export class AppCheckManager {
  private static instance: AppCheckManager;
  private appCheck: any = null;
  private config: AppCheckConfig;

  private constructor(app: FirebaseApp, config: AppCheckConfig) {
    this.config = config;
    this.initializeAppCheck(app);
  }

  public static getInstance(app: FirebaseApp, config: AppCheckConfig): AppCheckManager {
    if (!AppCheckManager.instance) {
      AppCheckManager.instance = new AppCheckManager(app, config);
    }
    return AppCheckManager.instance;
  }

  private initializeAppCheck(app: FirebaseApp): void {
    // Only initialize in browser environment
    if (typeof window === 'undefined') {
      console.log('App Check: Skipping initialization (server-side)');
      return;
    }

    if (!this.config.isEnabled) {
      console.log('App Check: Disabled in configuration');
      return;
    }

    if (!this.config.siteKey) {
      console.warn('App Check: No reCAPTCHA site key provided. Add NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY to environment variables.');
      return;
    }

    try {
      // Enable debug mode in development
      if (process.env.NODE_ENV === 'development') {
        // @ts-ignore
        window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
        console.log('App Check: Debug mode enabled for development');
      }

      this.appCheck = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(this.config.siteKey),
        isTokenAutoRefreshEnabled: this.config.isTokenAutoRefreshEnabled ?? true
      });

      console.log('App Check: Initialized successfully');
    } catch (error) {
      console.warn('App Check: Initialization failed:', error);
      console.info('Continuing without App Check protection');
    }
  }

  public async getToken(): Promise<string | null> {
    if (!this.appCheck) {
      return null;
    }

    try {
      const tokenResponse = await getToken(this.appCheck);
      return tokenResponse.token;
    } catch (error) {
      console.warn('App Check: Failed to get token:', error);
      return null;
    }
  }

  public isInitialized(): boolean {
    return !!this.appCheck;
  }

  public getConfig(): AppCheckConfig {
    return { ...this.config };
  }
}

// Default configuration
export const getAppCheckConfig = (): AppCheckConfig => ({
  isEnabled: true,
  provider: 'recaptcha-v3',
  siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY,
  isTokenAutoRefreshEnabled: true
});

// Helper function to add App Check token to request headers
export const addAppCheckToken = async (
  headers: Record<string, string> = {},
  appCheckManager?: AppCheckManager
): Promise<Record<string, string>> => {
  if (!appCheckManager) {
    return headers;
  }

  const token = await appCheckManager.getToken();
  if (token) {
    headers['X-Firebase-AppCheck'] = token;
  }

  return headers;
};
