import React from 'react';
import { Text } from 'react-native';

import { 
   Container,
   ScriptImg,
   ScriptInfos,
   Description,
   Tags,
   Tag
} from './styles';

const ScriptCard = (props) => {

   function handleNavigateToStory(id) {
      alert('oi')
   }

   return (
      <Container 
         color={props.color_theme} 
         onPress={() => handleNavigateToStory(props.id)}
      >
         <ScriptImg 
            source={props.image_path}
            resizeMode="contain"
         />
         <ScriptInfos>
            <Description>
               {props.description}
            </Description>
            <Tags>
               {props.tags.map((item) => (
                  <Tag 
                     key={item.tag_name}
                     color={item.tag_color}
                  >
                     {item.tag_name}
                  </Tag>
               ))}
            </Tags>
         </ScriptInfos>
      </Container>
   );
}

export default ScriptCard;