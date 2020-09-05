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

   function handleNavigateToScriptHome(id) {
      if (id === 2) navigate('ScriptHome', { script });
   }

   if (!script) return false;

   else {
      return (
         <Container 
            color={script.color_theme} 
            onPress={() => handleNavigateToScriptHome(script.id)}
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
}

export default ScriptCard;