// src/types/global.d.ts
export {}; // keep file a module so triple-slash includes work if needed

declare global {
  interface ClarityGlobal {
    q?: unknown[]; // queue of calls, each call stored as an array of args
    (...args: unknown[]): void;
  }

  interface Window {
    clarity?: ClarityGlobal | undefined;
  }

  interface ImportMeta {
    readonly env?: {
      DEV?: boolean;
    };
  }
}
