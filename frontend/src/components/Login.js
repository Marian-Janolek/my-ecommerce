import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSubmenuContext } from '../context/submenuContext';

const Login = () => {
  const { closeSubmenu } = useSubmenuContext();

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
            <form>
              <h3>Sing In</h3>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <input
                type="submit"
                value="Login"
                onClick={(e) => e.preventDefault()}
              />
              <Link to="/" className="forgot">
                Forgot Password
              </Link>
            </form>
          </div>

          <div className="form singup-form">
            <form>
              <h3>Sing Up</h3>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Confirm Password" />
              <input
                type="submit"
                value="Register"
                onClick={(e) => e.preventDefault()}
              />
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
    font-size: 1rem;
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
