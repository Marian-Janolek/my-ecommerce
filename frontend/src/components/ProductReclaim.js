import React from 'react';
import styled from 'styled-components';

const ProductReclaim = () => {
  return (
    <Wrapper className="section-center">
      <h1>Payments</h1>
      <div className="underline"></div>;
      <div>
        <h2>How to proceed when i want to return the goods?</h2>
        <p>
          If you wish to return the goods, notify us by phone at +421 111 222
          333 or via e-mail info-sport@sport.sk and we will provide you with the
          necessary instructions as well as the address for returning the goods.
        </p>
        <p>
          The goods you wish to return must be undamaged, in their original
          packaging, without signs of use.
        </p>
        <p>
          Pack the goods securely so that they are not damaged during transport.
        </p>
        <p>
          No later than 14 days after receiving the goods in our warehouse, your
          payment will be refunded to the bank account specified by you.
        </p>
        <h2>Until i can return the goods?</h2>
        <p>
          You can return the goods to us within 14 days from the day of your
          receipt of the package from the courier.
        </p>
        <h2>How long will it take a refund?</h2>
        <p>
          We will transfer the payment for the returned goods to the bank
          account specified by you, usually within 2-7 days, but no later than
          within 14 calendar days from the receipt of the goods at our
          warehouse.
        </p>
        <h2>Didn't find answer to your question?</h2>
        <p>
          If, despite answering these most frequently asked questions, you need
          to contact us, you can do so via our e-mail info@hk-green.sk, or by
          phone at +421 111 222 333.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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
    padding-top: 1rem;
  }
  p {
    margin-bottom: 0.7rem;
  }
`;

export default ProductReclaim;
