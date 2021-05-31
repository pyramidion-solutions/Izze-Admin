import { createContext } from 'react';
import Store from "../Stores";

export const StoreContext = createContext(Store);
export const StoreProvider = (props: any) => <StoreContext.Provider value={Store}>{props.children}</StoreContext.Provider>;