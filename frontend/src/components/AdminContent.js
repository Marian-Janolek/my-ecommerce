import React from 'react';
import styled from 'styled-components';
import { AdminOrders, AdminProducts, AdminUsers } from '.';
import { useSubmenuContext } from '../context/submenuContext';

const AdminContent = () => {
  const [value, setValue] = React.useState(1);
  const { closeSubmenu } = useSubmenuContext();

  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <div className="btn-flex">
          <button
            className={`btn-links ${value === 1 && `btn-active`}`}
            onClick={() => setValue(1)}
          >
            User list
          </button>
          <button
            className={`btn-links ${value === 2 && `btn-active`}`}
            onClick={() => setValue(2)}
          >
            Product list
          </button>
          <button
            className={`btn-links ${value === 3 && `btn-active`}`}
            onClick={() => setValue(3)}
          >
            Order list
          </button>
        </div>

        <article>
          {value === 1 && <AdminUsers />}

          {value === 2 && <AdminProducts />}

          {value === 3 && <AdminOrders />}
        </article>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  margin-top: 3rem;
  margin-bottom: 4rem;

  .btn-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
  }

  .btn-links {
    border: none;
    color: var(--dark-color-light);
    font-weight: var(--font-semi-bold);
  }
  .btn-links:hover {
    color: var(--dark-color);
  }
  button {
    position: relative;
  }
  .btn-links::after,
  .btn-active::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 0.1rem;
    background-color: var(--dark-color);
    bottom: 0%;
    left: 50%;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  .btn-active::after {
    width: 100%;
    left: 0%;
  }
  .btn-links:hover::after {
    left: 0%;
    width: 100%;
  }
  .btn-active {
    color: var(--dark-color);
  }
`;

export default AdminContent;
