import React from 'react';
import styled from 'styled-components';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

const Question = ({ question, info }) => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <Wrapper onClick={() => setShowInfo(!showInfo)}>
      <header>
        <h4>{question}</h4>
        <button className="question-btn">
          {showInfo ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem 1.5rem;
  border: 1px solid var(--dark-color-light);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .question-btn {
    background: transparent;
    border-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
    font-size: 1.3rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin-top: 0.5rem;
  }
`;

export default Question;
