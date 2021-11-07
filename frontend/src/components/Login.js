import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSubmenuContext } from '../context/submenuContext';
import { useUserContext } from '../context/userContext';
// const rootUrl = 'http://localhost:5000';

const Login = () => {
  const { closeSubmenu } = useSubmenuContext();
  const { register, login } = useUserContext();
  const [name, setName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  const formBtn = document.querySelector('.form-container');
  const wrapper = document.getElementById('wrapper');

  const singInHandler = () => {
    formBtn.classList.remove('active');
    wrapper.classList.remove('active');
  };
  const singUpHandler = () => {
    formBtn.classList.add('active');
    wrapper.classList.add('active');
  };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if (regPassword !== confirmPassword) {
      setMessage('Paswords do not match');
    }

    register({ myUser: { name, email: regEmail, password: regPassword } });
    setName('');
    setRegEmail('');
    setRegPassword('');
    setConfirmPassword('');
  };

  const logSubmitHandler = (e) => {
    e.preventDefault();
    if (!logEmail || !logPassword) return;
    const user = { email: logEmail, password: logPassword };
    login({ myUser: user });

    setLogEmail('');
    setLogPassword('');
  };

  return (
    <LoginWrapper
      className="section-center"
      id="wrapper"
      onMouseOver={closeSubmenu}
    >
      <div className="container">
        <div className="login-bg">
          <div className="box singin">
            <h2>Already have an Account ?</h2>
            <button className="singin-btn" onClick={singInHandler}>
              Sing In
            </button>
          </div>
          <div className="box singup">
            <h2>Don't have an Account ?</h2>
            <button className="singup-btn" onClick={singUpHandler}>
              Sing Up
            </button>
          </div>
        </div>
        <div className="form-container">
          <div className="form singin-form">
            <form onSubmit={logSubmitHandler}>
              <h3>Sing In</h3>
              <input
                type="email"
                placeholder="Email"
                value={logEmail}
                onChange={(e) => setLogEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={logPassword}
                onChange={(e) => setLogPassword(e.target.value)}
              />
              <button type="submit" className="login-btn">
                Login
              </button>
              <Link to="/" className="forgot">
                Forgot Password
              </Link>
            </form>
          </div>

          <div className="form singup-form">
            <form onSubmit={registerSubmitHandler}>
              <h3>Sing Up</h3>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <Link to="/products"> */}{' '}
              <button type="submit" className="register-btn">
                Register
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: var(--transition);
  margin-top: 2rem;
  margin-bottom: 3rem;
  .container {
    position: relative;
    width: 800px;
    height: 500px;
    margin: 20px;
    background-color: var(--dark-color-lighten);
  }
  .login-bg {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
  }
  .login-bg .box {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login-bg .box h2 {
    font-size: var(--h2-font-size);
    font-weight: var(--font-medium);
    margin-bottom: 10px;
  }

  .login-bg .box button {
    cursor: pointer;
    padding: 10px 20px;
    background-color: var(--dark-color);
    font-size: var(--normal-font-size);
    border: none;
    color: var(--white-color);
    font-weight: var(--font-semi-bold);
    letter-spacing: var(--spacing);
  }
  button {
    cursor: pointer;
    padding: 10px 20px;
    background-color: var(--dark-color-light);
    font-size: var(--normal-font-size);
    border: none;
    color: var(--white-color);
    font-weight: var(--font-semi-bold);
    letter-spacing: var(--spacing);
  }
  .login-btn {
    width: 6rem;
  }
  .register-btn {
    width: 7rem;
  }
  .form-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: var(--dark-color);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
    transition: 0.5s ease-in-out;
    overflow: hidden;
  }
  .form-container .singin-form {
    transition-delay: 0.25s;
  }
  .form-container.active .singin-form {
    left: -100%;
    transition-delay: 0s;
  }
  .form-container .singup-form {
    left: 0;
    transition-delay: 0s;
    opacity: 0;
    z-index: -1;
  }
  .form-container.active .singup-form {
    left: 0;
    transition-delay: 0.25s;
    opacity: 1;
    z-index: 1;
  }
  input {
    font-size: var(--normal-font-size);
    font-weight: var(--font-semi-bold);
  }
  input::placeholder {
    font-weight: var(--font-medium);
  }

  .form-container.active {
    left: 50%;
  }
  .form-container .form {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 50px;
    transition: var(--transition);
  }
  .form-container .form form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .form-container .form form h3 {
    font-size: var(--bigger-font-size);
    color: var(--white-color);
    margin-bottom: 20px;
    font-weight: var(--font-medium);
  }
  .form-container .form form input {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    outline: none;
    font-size: var(--normal-font-size);
    border: 1px solid var(--white-color);
  }

  .form-container .form form input[type='submit'] {
    background-color: var(--dark-color-light);
    border: none;
    color: var(--white-color);
    max-width: 100px;
    cursor: pointer;
  }

  .form-container .singup-form input[type='submit'] {
    background-color: var('dark-color-light');
  }

  .form-container .form form .forgot {
    color: var(--white-color);
  }
  @media (max-width: 992px) {
    .container {
      max-width: 400px;
      height: 650px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container .login-bg {
      top: 0;
      height: 100%;
    }
    .form-container {
      width: 100%;
      height: 500px;
      top: 0;
      box-shadow: none;
    }
    .login-bg .box {
      position: absolute;
      width: 100%;
      height: 150px;
      bottom: 0;
    }
    .box.singin {
      top: 0;
    }

    .form-container.active {
      left: 0;
      top: 150px;
    }
  }
`;

export default Login;
