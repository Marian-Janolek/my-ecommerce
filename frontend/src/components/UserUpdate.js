import React, { useState } from 'react';
import styled from 'styled-components';
import { useUserContext } from '../context/userContext';

const UserUpdate = () => {
  const { myUser, updateCredentials, updatePassword } = useUserContext();
  const {
    data: { user },
  } = myUser;

  const [value, setValue] = useState(1);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassoword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [email, setEmail] = useState('');

  const clearPasswordHandler = (e) => {
    e.preventDefault();
    setOldPassword('');
    setNewPassoword('');
    setConfirmNewPassword('');
  };
  const clearCredentialsHandler = (e) => {
    e.preventDefault();
    setNewName('');
    setEmail('');
  };
  const credentialSubmitHandler = (e) => {
    e.preventDefault();

    updateCredentials({
      myUser: {
        name: newName === '' ? user.name : newName,
        email: email === '' ? user.email : email,
      },
    });

    setEmail('');
    setNewName('');
  };

  const passwordSubmitHandler = (e) => {
    e.preventDefault();

    updatePassword({
      myUser: {
        oldPassword,
        newPassword,
        // confirmNewPassword,
      },
    });

    setOldPassword('');
    setNewPassoword('');
    // setConfirmNewPassword('');
  };

  return (
    <Wrapper>
      <div className="profile-btn-flex">
        <button
          className={`profile-btn-links btn-links ${
            value === 1 && `profile-btn-active`
          }`}
          onClick={() => setValue(1)}
        >
          Change credentials
        </button>
        <button
          className={`profile-btn-links btn-links ${
            value === 2 && `profile-btn-active`
          }`}
          onClick={() => setValue(2)}
        >
          Change password
        </button>
      </div>
      <div>
        {value === 1 && (
          <form className="credentials" onSubmit={credentialSubmitHandler}>
            <div>
              <h4>current name :</h4>
              <h3>{user.name}</h3>
              <h4>current email :</h4>
              <h3>{user.email}</h3>
            </div>
            <div className="form-flex">
              <label htmlFor="name">Set new name</label>
              <input
                type="namr"
                placeholder="new name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <label htmlFor="email">Set new email</label>
              <input
                type="email"
                placeholder="new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="profile-btn-flex">
                <button
                  type="submit"
                  className="btn"
                  onClick={clearCredentialsHandler}
                >
                  Clear
                </button>
                <button type="submit" className="btn">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        )}
        {value === 2 && (
          <form onSubmit={passwordSubmitHandler}>
            <label htmlFor="password">Enter old password</label>
            <input
              type="password"
              placeholder="old password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label htmlFor="password">Set new password</label>
            <input
              type="password"
              placeholder="new password"
              required
              value={newPassword}
              onChange={(e) => setNewPassoword(e.target.value)}
            />
            {/* <label htmlFor="password">Confirm new password</label>
            <input
              type="password"
              placeholder="confirm new password"
              required
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            /> */}
            <div className="profile-btn-flex">
              <button
                type="submit"
                className="btn"
                onClick={clearPasswordHandler}
              >
                Clear
              </button>
              <button type="submit" className="btn">
                Confirm
              </button>
            </div>
          </form>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 2rem 0;
    background-color: var(--white-color);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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

  button {
    position: relative;
  }

  label {
    text-transform: capitalize;
  }
  .profile-btn-links {
    font-size: var(--smaller-font-size);
  }
  .credentials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem 1.5rem;
    gap: 2rem;
  }
  .form-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    text-transform: capitalize;
    font-weight: var(--font-medium);
    padding-bottom: 0.3rem;
    font-size: var(--smaller-font-size);
  }
  h3 {
    font-weight: var(--font-semi-bold);
    font-size: var(--normal-font-size);
    padding-bottom: 0.5rem;
  }
`;

export default UserUpdate;
