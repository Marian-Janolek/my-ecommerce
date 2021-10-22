import React from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const Payments = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <Wrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>Payments</h1>
      <div className="underline"></div>
      <div className="div-center">
        <h3>
          For security reasons, we only accept VISA, MASTERCARD and PayPal
          payments
        </h3>
        <table>
          <tbody>
            <tr>
              <th>Cash on delivery (order under 60 €)</th>
              <td>1.00 €</td>
            </tr>
            <tr>
              <th>Cash on delivery (order over 60 €)</th>
              <td>0 €</td>
            </tr>
            <tr>
              <th>PayPal</th>
              <td>0 €</td>
            </tr>
            <tr>
              <th>Credit Card</th>
              <td>0 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4rem;

  h3 {
    text-align: center;
    margin-bottom: 2rem;
  }
  table {
    margin: 0 auto;
    background: var(--white-color);
  }
  table th {
    text-align: left;
    font-weight: 400;
    padding: 1rem 2rem;
  }
  table td {
    font-weight: 400;
    text-align: right;
    padding: 1rem 2rem;
  }
  table,
  th,
  td {
    border: 1px solid var(--dark-color-light);
    border-collapse: collapse;
  }
`;

export default Payments;
