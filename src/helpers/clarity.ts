// export function injectClarity(projectId: string): void {
//   if (typeof window === 'undefined') {
//     return;
//   }
//   if (window.clarity?.q && document.getElementById('clarity-script')) {
//     return;
//   }

//   // Microsoft Clarity official snippet adapted for module context
//   (function (
//     c: Document,
//     _l: string,
//     a: string,
//     _r: string,
//     i: string,
//     t?: HTMLScriptElement,
//     y?: Node,
//   ) {
//     try {
//       window.clarity =
//         window.clarity ||
//         function () {
//           (window.clarity!.q = window.clarity!.q || []).push(arguments);
//         };
//       t = c.createElement(a) as HTMLScriptElement;
//       t.id = 'clarity-script';
//       t.async = true;
//       t.src = `https://www.clarity.ms/tag/${i}`;
//       y = c.getElementsByTagName(a)[0];
//       y?.parentNode?.insertBefore(t, y);
//     } catch (e) {
//       if (import.meta.env.DEV) {
//         // eslint-disable-next-line no-console
//         console.error('[Clarity] Script injection failed:', e);
//       }
//     }
//   })(document, 'clarity', 'script', 'script', projectId);
// }

// export function removeClarity(): void {
//   if (typeof window === 'undefined') {
//     return;
//   }

//   const script = document.getElementById('clarity-script');
//   if (script && script.parentNode) {
//     script.parentNode.removeChild(script);
//   }
// }
