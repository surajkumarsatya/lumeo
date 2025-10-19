import { useEffect } from 'react';
import { injectClarity, removeClarity } from '../helpers/clarity';
import config from '../config';

export function useClarity(): void {
  useEffect(() => {
    const projectId = ''; // Hardcoded as empty in the screenshot

    if (config.enableClarity && projectId) {
      injectClarity(projectId);
    } else {
      removeClarity();
    }

    return () => {
      // Cleanup function
      removeClarity();
    };
  }, []);
}
