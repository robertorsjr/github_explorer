import React, { useState, FormEvent } from 'react';
import { Repositories } from '../../components'
import api from '../../services';
import { Container, Title, Logo, Form, Error } from './styles';

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
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])
 
  async function hendleAddRepository(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!newRepo){
      setInputError('Digite o autor/nome do repositório')
      return;
    }

    try{
    const response = await api.get<Repository>(`repos/${newRepo}`)
    const repository = response.data;
    setRepositories([...repositories , repository]);
    setInputError('')

    }catch(err){
      setInputError('Erro na busca por esse repositório')
    }
  }

  return(
    <Container>
      <Logo/>
      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!inputError} onSubmit={hendleAddRepository}>
        <input
          value={newRepo}
          onChange={(e)=> setNewRepo(e.target.value)} 
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">pesquisar</button>
      </Form>
      { 
        inputError && <Error>{inputError}</Error> 
      }
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