import React, { useState, FormEvent } from 'react';
import { Repositories } from '../../components'
import api from '../../services';
import { Container, Title, Logo, Form } from './styles';

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: URL;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])
 
  async function hendleAddRepository(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`)
    console.warn(response.data)
    const repository = response.data;
    setRepositories([...repositories , repository]);
  }

  return(
    <Container>
      <Logo/>
      <Title>Explore repositórios no Github.</Title>
      <Form onSubmit={hendleAddRepository}>
        <input
        value={newRepo}
        onChange={(e)=> setNewRepo(e.target.value)} 
        placeholder="Digite o nome do repositório"
        />
        <button type="submit">pesquisar</button>
      </Form> 
      {
        repositories.map(repository =>
          <Repositories 
            key={repository.full_name}
            name={repository.full_name}
            img={repository.owner.avatar_url}
            description={repository.description}
          />
        )
      }
    </Container>
  )
}

export default Dashboard;