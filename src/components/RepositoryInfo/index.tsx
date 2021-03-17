import React from 'react';
import { Container, Avatar, TextContainer } from './styles';

interface Repository{
  img: URL;
  id: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  issues: number;
}

const RepositoryInfo: React.FC<Repository> = ({img, id, name, description, stars, forks, issues}) => {
  return (
    <Container>
      <header>
        <Avatar src={`${img}`} alt={id}/>
        <TextContainer>
          <strong>{name}</strong>
          <p>{description}</p>
        </TextContainer>
      </header>
      <ul>
        <li>
          <strong>{stars}</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>{forks}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{issues}</strong>
          <span>Issues Abertas</span>
        </li>
      </ul>
    </Container>
  );
}

export default RepositoryInfo;