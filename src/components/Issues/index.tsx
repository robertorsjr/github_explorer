import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Container, TextContainer } from './styles';

interface Issue {
  to: string;
  title: string;
  login: string;
}

const Issues: React.FC<Issue> = ({ to, title, login }) => {
  return (
    <Container>
      <a href={`${to}`} target="_blank" rel="noreferrer" >
        <TextContainer>
          <strong>{title}</strong>
          <p>{login}</p>
        </TextContainer>
        <FiChevronRight size={20} />
      </a>
    </Container>
  );
}

export default Issues;