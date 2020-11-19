import React from 'react';
import styled from 'styled-components';

const ListBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin-top: 30px;
  width: 200px;
  height: 100px;
  h4 {
    color: white;
  }
`;
function Main({ name }) {
  return (
    <ListBlock>
      <h4>{name}</h4>
    </ListBlock>
  );
}

export default Main;
