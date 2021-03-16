import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, TextContainer } from './styles';

const Issues: React.FC = () => {
  return (
    <Container>
    <Link to='aaa'>
    <TextContainer>
      <strong>name</strong>
      <p>description</p>
    </TextContainer>
    <FiChevronRight size={20}/>
    </Link>
  </Container>
  );
}

export default Issues;