import React from 'react';
import styled from 'styled-components';

const UserUpdate = () => {
  return (
    <Wrapper>
      <div>
        <form>
          <label htmlFor="email">Set new email address</label>
          <input type="email" placeholder="new email" />
          <label htmlFor="password">Set new password</label>
          <input type="password" placeholder="new password" />
          <label htmlFor="password">Confirm password</label>
          <input type="password" placeholder="confirm password" />
          <div className="btn-flex">
            <button
              type="submit"
              className="btn"
              onClick={(e) => e.preventDefault()}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn"
              onClick={(e) => e.preventDefault()}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 25vw;
  margin: 0 auto;
  background-color: var(--white-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 2rem 0;
  }
  form input {
    outline: none;
    border: none;
    font-size: var(--normal-font-size);
    padding: 0.5rem;
    font-weight: var(--font-bold);
    padding-left: 1rem;
    margin-bottom: 1rem;
    background-color: var(--dark-color-lighten);
  }
  form input::placeholder {
    text-transform: capitalize;
    text-align: center;
    color: var(--dark-color-light);
    font-weight: 400;
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
  }
  form label {
    margin-bottom: 1rem;
  }
  .btn-flex {
    display: flex;
    margin-top: 1rem;
  }
`;

export default UserUpdate;
