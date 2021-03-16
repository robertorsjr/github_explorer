import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import api from '../../services'
import { FiChevronLeft } from 'react-icons/fi'
import { Issues, RepositoryInfo } from '../../components'
import { Header, Logo } from './styles';

interface RepositoryParams{
  repository: string;
}

interface IRepository{
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number; 
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: URL;
  }
}

interface Issue{
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository , setRepository] = useState<IRepository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])
  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(()=>{
    async function fetchRepository(){
      const[response, issues] = await Promise.all([
        api.get(`/repos/${params.repository}`),
        api.get(`/repos/${params.repository}/issues`)
      ])
      setRepository(response.data)
      setIssues(issues.data)
    }
    fetchRepository()
  },[params.repository])


  return (
    <>
      <Header>
        <Logo/>
        <Link to='/'>  
          <FiChevronLeft size={16}/>
          voltar
        </Link>
      </Header>
      {
        repository && (
          <RepositoryInfo
            img={repository.owner.avatar_url}
            id={repository.owner.login}
            name={repository.full_name}
            description={repository.description}
            stars={repository.stargazers_count}
            forks={repository.forks_count}
            issues={repository.open_issues_count}
          />
        )
      }
      {
        issues && (
          issues.map(issue => (
              <Issues
              key={issue.id}
              to={issue.html_url}
              title={issue.title}
              login={issue.user.login}
            />
          ))  
        )
      }
    </>
  );
}

export default Repository;