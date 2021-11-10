import React, { useReducer, useContext, useState } from 'react';
import { sublinks } from '../utils/constants';
import reducer from '../reducer/submenuReducer';
import { SUBMENU_CLOSE, SUBMENU_OPEN } from '../actions';

const initialState = {
  isSubmenuOpen: false,
};

const SubmenuContext = React.createContext();

export const SubmenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    dispatch({ type: SUBMENU_OPEN });
  };
  const closeSubmenu = () => {
    dispatch({ type: SUBMENU_CLOSE });
  };

  return (
    <SubmenuContext.Provider
      value={{ ...state, openSubmenu, closeSubmenu, location, page }}
    >
      {children}
    </SubmenuContext.Provider>
  );
};

export const useSubmenuContext = () => {
  return useContext(SubmenuContext);
};
