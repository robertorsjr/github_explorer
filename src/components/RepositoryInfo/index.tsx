import React from 'react';

import { Container, Avatar, TextContainer } from './styles';

const RepositoryInfo: React.FC = () => {
  return (
    <Container>
      <header>
        <Avatar src='https://avatars.githubusercontent.com/u/71423080?s=460&u=a5c60b93356615006839056572a3cca064879b7b&v=4' alt='beto'/>
        <TextContainer>
          <strong>roberto</strong>
          <p>descrição</p>
        </TextContainer>
      </header>
      <ul>
        <li>
          <strong>1909</strong>
          <span>stars</span>
        </li>
        <li>
          <strong>1909</strong>
          <span>stars</span>
        </li>
        <li>
          <strong>1909</strong>
          <span>stars</span>
        </li>
      </ul>
    </Container>
  );
}

export default RepositoryInfo;