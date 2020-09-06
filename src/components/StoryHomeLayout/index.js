import React from 'react';
import { View } from 'react-native';

import { 
   Container,
   Cover,
   Content,
} from './styles';

const StoryHomeLayout = ({ color, cover, children }) => {
  return (
     <Container color={color}>
        <Cover source={cover} resizeMode="contain" />
        <Content>
            {children}
        </Content>
     </Container>
  );
}

export default StoryHomeLayout;