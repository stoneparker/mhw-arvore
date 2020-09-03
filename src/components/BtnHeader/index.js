import React from 'react';

import { Container } from './styles';

const BtnHeader = (props) => {
  return (
     <Container color={props.color} {... props}>
        {props.children}
     </Container>
  );
}

export default BtnHeader;