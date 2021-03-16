import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Container, Avatar, TextContainer } from './styles';

const Repositories: React.FC = () => (
  <Container>
    <a href='test'>
    <Avatar/>
    <TextContainer>
      <strong>roberto/unform</strong>
      <p>bçbabçaçbbçabçabbç</p>
    </TextContainer>
    <FiChevronRight size={20}/>
    </a>
  </Container>
);

export default Repositories;