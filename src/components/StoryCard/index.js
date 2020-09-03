import React from 'react';

import { 
   Container,
   Header,
   Illustration,
   Infos,
   Title,
   Author,
   AgeContainer,
   Age,
} from './styles';

const StoryCard = (props) => {
   return (
      <Container>
         <Header color={props.color_theme}>
            <Illustration 
               source={props.image_path} 
               resizeMode="contain"
            />
         </Header>
         <Infos>
            <Title>{props.title}</Title>
            <Author>{props.author}</Author>
         </Infos>

         <AgeContainer>
            <Age>{props.age}</Age>
         </AgeContainer>
      </Container>
   );
}

export default StoryCard;