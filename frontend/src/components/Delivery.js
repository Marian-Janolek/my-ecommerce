import React from 'react';
import styled from 'styled-components';

const Delivery = () => {
  return (
    <Wrapper className="section-center">
      <h1>Delivery</h1>
      <div className="underline"></div>;
      <div>
        <h2>Slovakia Post</h2>
        <h4>Courier (next day)</h4>
        <p>
          We deliver only to addresses within Slovakia and Czech republic.
          Unfortunately, we do not deliver to addresses outside of the Slovakia
          and Czech Republic at this time. Final shipping costs will be
          calculated at checkout before payment.
        </p>
        <table className="table-slovakia">
          <tbody>
            <tr>
              <td>Courier (order under 60 €)</td>
              <td>3.99 €</td>
            </tr>
            <tr>
              <td>Courier (order over 60 €)</td>
              <td>FREE !</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Slovakia Parcel Servis</h2>
        <h4>Courier (next day)</h4>

        <table className="table-slovakia">
          <tbody>
            <tr>
              <td>Courier (order under 60 €)</td>
              <td>4.99 €</td>
            </tr>
            <tr>
              <td>Courier (order over 60 €)</td>
              <td>FREE !</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Personal pickup of goods</h2>
        <p>
          Personal pickup of your order in our store is <strong>free.</strong>{' '}
          Reservation of orders is 7 days from confirmation by the Seller.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 4rem;
  h1 {
    text-transform: capitalize;
    margin-top: 2rem;
  }
  .underline {
    display: inline-block;
    text-align: left;
  }
  h2 {
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.7rem;
  }

  h2,
  h4,
  p {
    text-align: center;
  }
  .table-slovakia {
    margin: 2rem auto;
  }
  .table-slovakia,
  td {
    border: 1px solid var(--dark-color-light);
    border-collapse: collapse;
  }
  .table-slovakia td {
    padding: 1rem 2rem;
  }
`;
export default Delivery;
