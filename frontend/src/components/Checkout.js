import React, { useState } from 'react';
import styled from 'styled-components';
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';
import { useSubmenuContext } from '../context/submenuContext';

const Checkout = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const circles = document.querySelectorAll('.circle');
  const progress = document.querySelector('.progress');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const { closeSubmenu } = useSubmenuContext();

  const update = () => {
    {
      circles.forEach((circle, index) => {
        if (index < currentActive) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });
    }
    const actives = document.querySelectorAll('.active');
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  };

  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <div className="container">
          <div className="headings">
            <h5>sing in</h5>
            <h5>shipping</h5>
            <h5>payent method</h5>
            <h5>checkout</h5>
          </div>
          <div className="progress-container">
            <div className="progress" id="progress">
              {' '}
            </div>

            <div className="circle active">
              <i className="icon-1">
                <RiNumber1 />
              </i>
            </div>

            <div className="circle">
              <i className="icon-2">
                <RiNumber2 />
              </i>
            </div>

            <div className="circle">
              <i className="icon-3">
                <RiNumber3 />
              </i>
            </div>

            <div className="circle">
              <i className="icon-4">
                <RiNumber4 />
              </i>
            </div>
          </div>

          <h2>shipping</h2>
          <div className="form-container">
            <form className="flex-form" id="shipping">
              <label htmlFor="adress">Your address</label>
              <input type="text" placeholder="Enter adress" required />
              <label htmlFor="city">City</label>
              <input type="text" placeholder="Enter City" required />
              <label htmlFor="postal">Postal Code</label>
              <input type="text" placeholder="Enter postal code" required />
              <label htmlFor="country">Country</label>
              <input type="text" placeholder="Enter country" required />
            </form>
          </div>

          <h2>payment method</h2>
          <div className="form-container">
            <form className="flex-form">
              <label>Select Method</label>
              <div className="check-flex">
                <input type="radio" value="paypal" name="paypal" id="paypal" />
                <label htmlFor="paypal">PayPal or Credit Card</label>
                <input type="radio" value="cash" name="cash" id="cash" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </form>
          </div>

          <button
            type="button"
            className="btn"
            id="prev"
            onClick={function () {
              if (currentActive < 1) {
                return setCurrentActive(1);
              }
              setCurrentActive(currentActive - 1);
              update();
            }}
          >
            go back
          </button>
          <button
            type="button"
            className="btn"
            id="next"
            onClick={function () {
              if (currentActive > circles.length) {
                return setCurrentActive(circles.length);
              }
              setCurrentActive(currentActive + 1);

              update();
            }}
          >
            continue
            {console.log(currentActive)}
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.main`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .headings {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  h5 {
    text-transform: capitalize;
  }
  i {
    font-size: var(--smaller-font-size);
  }
  .container {
    text-align: center;
  }
  .progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 2rem;
    max-width: 100%;
    width: 350px;
  }
  .progress-container::before {
    content: '';
    background-color: var(--dark-color-light);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    z-index: -1;
    transition: var(--transition);
  }

  .progress {
    background-color: var(--dark-color);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    z-index: -1;
    transition: var(--transition);
  }

  .circle {
    background-color: var(--white-color);
    color: var(--dark-color-light);
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 3px solid var(--dark-color-light);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
  .circle.active {
    border-color: var(--dark-color);
  }
  .btn {
    margin: 1rem;
    transition: none;
    padding: 0.5rem 1rem;
  }
  .btn:active {
    transform: scale(0.97);
  }
  .btn:disabled {
    background-color: var(--dark-color-light);
    cursor: not-allowed;
  }
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
    box-shadow: var(--shadow);
    width: 100%;
    transition: 0.3s ease;
  }
  .form-container:hover {
    border-color: var(--dark-color);
  }
  .flex-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }
  .flex-form input {
    width: 100%;
    padding: 1rem;
    border: none;
    font-size: var(--normal-font-size);
    font-weight: var(--font-bold);
  }
  .flex-form input::placeholder {
    font-size: var(--smaller-font-size);
    color: var(--dark-color-light);
    letter-spacing: var(--spacing);
    font-weight: var(--font-medium);
  }

  .flex-form label {
    margin: 0.5rem;
    text-align: left;
  }
  h2 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .check-flex {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    justify-content: left;
    align-items: center;
  }
`;

export default Checkout;
