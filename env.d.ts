/// <reference types="vite/client" />

interface CookiedockApi {
  open(): void;
  close(): void;
  acceptAll(): void;
  declineAll(): void;
  savePreferences(): void;
  showDetails(): void;
  hideDetails(): void;
}

declare global {
  interface Window {
    cookiedock?: CookiedockApi;
    dataLayer?: unknown[];
  }
}

export {};
