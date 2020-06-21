import { createContext } from 'react';

export interface UIContextProps {
  menuVisible: boolean;
  setMenuVisible: (visible: boolean) => any;
}
const UIContext = createContext<Partial<UIContextProps>>({
  menuVisible: false,
});
export default UIContext;
