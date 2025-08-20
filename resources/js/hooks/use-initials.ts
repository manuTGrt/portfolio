// Hook para obtener las iniciales de un nombre
import { useCallback } from 'react';

export function useInitials() {
  return useCallback((name: string) => {
    if (!name) return '';
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (
      words[0].charAt(0).toUpperCase() +
      words[words.length - 1].charAt(0).toUpperCase()
    );
  }, []);
}
