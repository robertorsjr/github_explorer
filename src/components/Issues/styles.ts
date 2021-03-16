import styled from 'styled-components';

export const Container = styled.div`
  margin-top:80px;
  cursor:pointer;
  transition: transform 0.2s; 
  &:hover{
    transform: translate(10px)
  }

  a{
    background:#fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display:flex;
    align-items: center;
  }

  & + div{
    margin-top: 16px;
  }

  svg{
    margin-left: auto;
    color: #CBCBD6;
  }
`;

export const TextContainer = styled.div`
  margin-left: 16px;

  strong{
    font-size: 20px;
    color: #3d3d4d;
  }
  
  p{
    font-size: 18px;
    color:#a8a8b3;
    margin-top: 4px;
  }
`;