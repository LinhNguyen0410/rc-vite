import { useEffect } from 'react';

const useUnload = (handler: (e: Event) => any) => {
  useEffect(() => {
    window.addEventListener('unload', handler);

    return () => window.removeEventListener('unload', handler);
  }, [handler]);
};

export default useUnload;
