import styled, { css } from 'styled-components';
import logo from '../../assets/logo.svg'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  
`;

export const Logo = styled.div`
  background: url(${logo}) no-repeat;
  width: 215px;
  height: 32px;
`;

export const Title = styled.div`
  font-size:48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display:flex;

  input{
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px; 
    color:#3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props)=> props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover{
      background: ${shade(0.2, '#04d361' )};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`
