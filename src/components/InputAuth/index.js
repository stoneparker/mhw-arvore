import React from 'react';
import { View } from 'react-native';

import { 
   Container,
   Label,
   Input
} from './styles';

const InputAuth = (props) => {
  return (
     <Container>
        <Label>{props.label}</Label>
        <Input secureTextEntry={props.secureTextEntry} keyboardType={props.keyboardType ? props.keyboardType : 'default'} />
     </Container>
  );
}

export default InputAuth;