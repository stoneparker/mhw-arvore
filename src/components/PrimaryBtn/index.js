import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, Label } from './styles';

const PrimaryBtn = (props) => {
   return (
      <Container onPress={props.onPress}>
         <Label>Começar a aventura!</Label>
         <IconContainer>
            <Feather name="arrow-right" size={25} color="#fff" />
         </IconContainer>
      </Container>
  );
}

export default PrimaryBtn;