import React from 'react';
import styled from 'styled-components';

const ProductExchangePage = () => {
  return (
    <Wrapper className="section-center">
      <h1>Product exchange</h1>
      <div className="underline"></div>
      <div>
        <p>
          We are confident that you will be more than pleased with your item
          ordered from our eshop . However, if you are not fully satisfied (the
          item does not fit properly or the product does not meet your
          expectations), we will be happy to exchange it for a different size,
          color or model. Within 14 days from accepting the parcel you have the
          right to exchange the product or return it without giving a reason why
          you do so.{' '}
        </p>
        <h2>Exchange by sending the product to the seller's address</h2>
        <ul>
          <li>
            Send and return the product within 14 days from accepting the
            parcel.
          </li>
          <li>
            The product in parcel has to be complete, intact, unused, with tags
            to enable product resale.
          </li>
          <li>
            Enclose the receipt or invoice together with a filled-in form.
          </li>
          <li>
            Submit the information about the new product (including the size and
            color) you would like to receive in exchange for the returned item.
          </li>
          <li>
            Do not send product with COD method otherwise we would not accept it
            and the parcel will return back to your address.
          </li>
          <li>
            The new product should have the same or higher value than the one
            you are returning. If the new product is more expensive, you will
            pay the price difference.
          </li>
          <li>
            All shipping costs are paid by you (when returning the product as
            well as getting a new one in exchange).
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4rem;

  p {
    line-height: 2rem;
  }
  h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  li {
    padding-left: 1rem;
    padding-top: 0.5rem;
  }
  ul > li::before {
    content: '-';
    position: absolute;
    margin-left: -1rem;
  }
`;

export default ProductExchangePage;
