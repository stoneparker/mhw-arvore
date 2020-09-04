import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
   Container,
   ScriptImg,
   ScriptInfos,
   Description,
   Tags,
   Tag
} from './styles';

const ScriptCard = (props) => {
   const { navigate } = useNavigation();
   const { script } = props;

   function handleNavigateToStoryHome(id) {
      if (id === 2) navigate('StoryHome', { script });
   }

   return (
      <Container 
         color={script.color_theme} 
         onPress={() => handleNavigateToStoryHome(script.id)}
      >
         <ScriptImg 
            source={script.image_path}
            resizeMode="contain"
         />
         <ScriptInfos>
            <Description>
               {script.description}
            </Description>
            <Tags>
               {script.tags.map((item) => (
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