// src/helpers/clarity.ts
// Helper to inject/remove Microsoft Clarity script with Next.js-friendly types

export function injectClarity(projectId: string): void {
  if (typeof window === 'undefined') return;

  // already injected and clarity queue exists
  if (window.clarity?.q && document.getElementById('clarity-script')) return;

  (function (
    c: Document,
    _l: string,
    a: string,
    _r: string,
    i: string,
    t?: HTMLScriptElement,
    y?: Node,
  ) {
    try {
      if (!window.clarity) {
        const stub = function (...args: unknown[]) {
          (window.clarity!.q = window.clarity!.q ?? []).push(args);
        } as unknown as typeof window.clarity;

        window.clarity = stub;
      }

      t = c.createElement(a) as HTMLScriptElement;
      t.id = 'clarity-script';
      t.async = true;
      t.src = `https://www.clarity.ms/tag/${i}`;
      y = c.getElementsByTagName(a)[0];
      y?.parentNode?.insertBefore(t, y);
    } catch (e) {
      if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('[Clarity] Script injection failed:', e);
      }
    }
  })(document, 'clarity', 'script', 'script', projectId);
}

export function removeClarity(): void {
  if (typeof window === 'undefined') return;

  const script = document.getElementById('clarity-script');
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }

  // Clear the typed property instead of deleting it
  window.clarity = undefined;
}

export {};
