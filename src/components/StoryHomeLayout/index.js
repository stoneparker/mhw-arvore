import React from 'react';
import { ScrollView } from 'react-native';

import { 
   Container,
   Cover,
   Content,
} from './styles';

const StoryHomeLayout = ({ color, cover, children }) => {
  return (
     <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{ backgroundColor: '#fff' }}
   >
      <Container color={color}>
         <Cover source={cover} resizeMode="contain" />
         <Content>
               {children}
         </Content>
      </Container>
     </ScrollView>
  );
}

export default StoryHomeLayout;