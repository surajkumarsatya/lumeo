// src/hooks/useClarity.ts
import { useEffect } from 'react';
import { injectClarity, removeClarity } from '../helpers/clarity';
import config from '../config';

export function useClarity(): void {
  useEffect(() => {
    const projectId = config.clarityId;

    if (config.enableClarity && projectId) {
      injectClarity(projectId);
    } else {
      removeClarity();
    }

    return () => {
      removeClarity();
    };
  }, []);
}
