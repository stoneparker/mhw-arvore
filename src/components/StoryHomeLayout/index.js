import React from 'react';
import { View } from 'react-native';

import { 
   Container,
   Cover,
   Content,
} from './styles';

const StoryHomeLayout = ({ children }) => {
  return (
     <Container>
        <Cover />
        <Content>
            {children}
        </Content>
     </Container>
  );
}

export default StoryHomeLayout;