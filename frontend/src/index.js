import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { SubmenuProvider } from './context/submenuContext';
import { FilterProvider } from './context/filterContext';
import { UserProvider } from './context/userContext';

ReactDOM.render(
  <UserProvider>
    <SubmenuProvider>
      <SidebarProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </SidebarProvider>
    </SubmenuProvider>
  </UserProvider>,
  document.getElementById('root')
);
