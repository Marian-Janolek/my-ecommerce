import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoaderWrapper>
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  #loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -2.7em;
    margin-left: -2.7em;
    width: 5.4em;
    height: 5.4em;
    background-color: transparent;
  }

  #hill {
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    top: 1.7em;
    left: 1.7em;
    background-color: transparent;
    border-left: 0.25em solid var(--dark-color);
    transform: rotate(45deg);
  }

  #hill:after {
    content: '';
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    left: 0;
    background-color: transparent;
  }

  #box {
    position: absolute;
    left: 0;
    bottom: -0.1em;
    width: 1em;
    height: 1em;
    background-color: transparent;
    border: 0.25em solid var(--dark-color);
    border-radius: 15%;
    transform: translate(0, -1em) rotate(-45deg);
    animation: push 2.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
  }

  @keyframes push {
    0% {
      transform: translate(0, -1em) rotate(-45deg);
    }
    5% {
      transform: translate(0, -1em) rotate(-50deg);
    }
    20% {
      transform: translate(1em, -2em) rotate(47deg);
    }
    25% {
      transform: translate(1em, -2em) rotate(45deg);
    }
    30% {
      transform: translate(1em, -2em) rotate(40deg);
    }
    45% {
      transform: translate(2em, -3em) rotate(137deg);
    }
    50% {
      transform: translate(2em, -3em) rotate(135deg);
    }
    55% {
      transform: translate(2em, -3em) rotate(130deg);
    }
    70% {
      transform: translate(3em, -4em) rotate(217deg);
    }
    75% {
      transform: translate(3em, -4em) rotate(220deg);
    }
    100% {
      transform: translate(0, -1em) rotate(-225deg);
    }
  }
`;

export default Loading;
