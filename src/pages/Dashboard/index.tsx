import React from 'react';
import { Repositories } from '../../components'
import { Container, Title, Logo, Form } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Logo/>
    <Title>Explore repositórios no Github.</Title>
    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">pesquisar</button>
    </Form> 
    <Repositories/>
  </Container>
)

export default Dashboard;