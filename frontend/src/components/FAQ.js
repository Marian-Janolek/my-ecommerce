import React, { useState } from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';
import { faqQuestions } from '../utils/constants';
import Question from './Question';

const FAQ = () => {
  const [questions, setQuestions] = useState(faqQuestions);
  const { closeSubmenu } = useSubmenuContext();

  return (
    <Wrapper className="section-center" onMouseOver={closeSubmenu}>
      {' '}
      <h1>FAQ</h1>
      <div className="underline"></div>
      {questions.map((q) => {
        return <Question key={q.id} {...q} />;
        {
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4rem;

  h2 {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`;

export default FAQ;
