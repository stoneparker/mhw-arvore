import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { 
   Container, 
   Text, 
   Illustration,
   OptionBtn,
   OptionBtnText,
} from './styles';

const Script = () => {
   const [page, setPage] = useState(0);

   const { navigate } = useNavigation();
   const route = useRoute();
   const { pages } = route.params;

   function nextPage(option_id) {
      if (pages[page].page_id === pages.length - 1){
         navigate('Reward', { read: false });
         
      } else {
         setPage(pages[page].options[option_id].next_page);
      }
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <Container>
            <Text>{pages[page].page_text}</Text>
            <Illustration source={pages[page].page_image_path} resizeMode="cover" />

            { pages[page].options.map((item) => (
               <OptionBtn 
                  key={item.option_id}
                  onPress={() => nextPage(item.option_id - 1)}
               >
                  <OptionBtnText>{item.option_text}</OptionBtnText>
               </OptionBtn>
            ))}

         </Container>
      </ScrollView>
   );
}

export default Script;