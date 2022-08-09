import { createContext } from 'react';
import { TempleContextType } from '../interfaces/temple';
export default createContext<Partial<TempleContextType | null>>({
  userId: null,
  setUserId: () => undefined,
});
