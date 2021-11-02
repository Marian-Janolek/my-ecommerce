import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { SubmenuProvider } from './context/submenuContext';
import { FilterProvider } from './context/filterContext';

ReactDOM.render(
  <SubmenuProvider>
    <SidebarProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </SidebarProvider>
  </SubmenuProvider>,
  document.getElementById('root')
);
