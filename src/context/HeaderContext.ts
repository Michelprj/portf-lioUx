import { createContext } from 'react';
import { HeaderContextType } from '../types';

const HeaderContext = createContext({} as HeaderContextType);

export default HeaderContext;
