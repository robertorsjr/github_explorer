import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Container, Avatar, TextContainer } from './styles';

interface Iprops{
  img: URL;
  name: string;
  description: string;
}

const Repositories: React.FC<Iprops> = ({img, name, description}) => (
  <Container>
    <a href='test'>
    <Avatar src={`${img}`}/>
    <TextContainer>
      <strong>{name}</strong>
      <p>{description}</p>
    </TextContainer>
    <FiChevronRight size={20}/>
    </a>
  </Container>
);

export default Repositories;