import React from 'react';

import { 
   Container,
   Content
} from './styles';

const BtnAuth = (props) => {
  return (
     <Container onPress={props.onPress}>
        <Content>{props.text}</Content>
     </Container>
  );
}

export default BtnAuth;