// Hook para manejar la navegación móvil y devolver una función cleanup
import { useCallback } from 'react';

export function useMobileNavigation() {
  // Aquí podrías agregar lógica para cerrar menús, limpiar estados, etc.
  // Por ahora, solo devuelve una función vacía (cleanup)
  return useCallback(() => {
    // Lógica de limpieza si es necesario
    // Por ejemplo: cerrar menú móvil, resetear scroll, etc.
  }, []);
}
