import styled from 'styled-components';
import logo from '../../assets/logo.svg'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8be;
    transition: color 0.2s;

    &:hover{
      color: #666;
    }

    svg{
      margin-right: 4px;
    }
  }
`

export const Logo = styled.div`
  background: url(${logo}) no-repeat;
  width: 215px;
  height: 32px;
`;