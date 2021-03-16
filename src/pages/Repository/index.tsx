import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { Issues, RepositoryInfo } from '../../components'
import { Header, Logo } from './styles';

interface RepositoryParams{
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <Logo/>
        <Link to='/'>
          <FiChevronLeft size={16}/>
          voltar
        </Link>
      </Header>
      <RepositoryInfo/>
      <Issues/>
    </>
  );
}

export default Repository;