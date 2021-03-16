import styled from 'styled-components';

interface RowProps {
  flexDirection : string;
  justifyContent : string;
}

const Row = styled.div`
  display: flex;
  flex-direction: ${( props:RowProps ) => props.flexDirection };
  align-items: center;
  justify-content: ${( props:RowProps ) => props.justifyContent};
`;

export default Row;