import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { SubmenuProvider } from './context/submenuContext';

ReactDOM.render(
  <SubmenuProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </SubmenuProvider>,
  document.getElementById('root')
);
