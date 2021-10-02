import { SUBMENU_OPEN, SUBMENU_CLOSE } from '../actions';

const submenuReducer = (state, action) => {
  if (action.type === SUBMENU_OPEN) {
    return { ...state, isSubmenuOpen: true };
  }
  if (action.type === SUBMENU_CLOSE) {
    return { ...state, isSubmenuOpen: false };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};
export default submenuReducer;
