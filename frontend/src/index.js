import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebarContext';
import { SubmenuProvider } from './context/submenuContext';
import { FilterProvider } from './context/filterContext';
import { UserProvider } from './context/userContext';
import { ProductsProvider } from './context/productsContext';

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <SubmenuProvider>
        <SidebarProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </SidebarProvider>
      </SubmenuProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById('root')
);
