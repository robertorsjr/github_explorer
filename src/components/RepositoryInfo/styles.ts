import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 80px;
  
  header{
    display: flex;
    align-items: center;
  }

  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;
  }

  li{

    & + li{
      margin-left: 80px;
    }

    strong{
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span{
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }
  }
  
`;

export const Avatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-size: cover;
`;

export const TextContainer = styled.div`
  margin-left: 24px;

  strong{
    font-size: 36px;
    color: #3d3d4d;
  }

  p{
     font-size: 18px;
     color: #737380;
     margin-top: 4px;
  }

`;

