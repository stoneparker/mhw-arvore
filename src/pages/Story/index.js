import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { 
   Container, 
   Text, 
   Illustration,
   NextPageBtn,
   Pagination,
} from './styles';
import { Feather } from '@expo/vector-icons';

const Story = () => {
   const [page, setPage] = useState(0);

   const { navigate } = useNavigation();
   const route = useRoute();
   const { pages } = route.params;

   function nextPage(page_id) {
      if (page_id === pages.length){
         navigate('Reward', { read: true });
         
      } else {
         setPage(page + 1);
      }
   }
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <Container>
            <Text>{pages[page].page_text}</Text>
            <Illustration 
               source={pages[page].page_image_path} 
               resizeMode="contain"
            />

            <NextPageBtn onPress={() => nextPage(pages[page].page_id)}>
               <Feather name="arrow-right" color="#fff" size={27} />
            </NextPageBtn>

            <Pagination>
               Página {page + 1} de {pages.length}
            </Pagination>
         </Container>
      </ScrollView>
   );
}

export default Story;