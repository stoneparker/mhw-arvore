import React from 'react';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import ScriptCard from '../../components/ScriptCard';

import scripts from '../../services/scripts';

import { 
  Container,
  Title,
  Input,
  InputBlock
} from './styles';

const Scripts = () => {
  return (
      <Container>
        <FlatList 
          ListHeaderComponent={
            <>
              <Title>Escolha um roteiro e crie uma história</Title>

              <InputBlock>
                <Input placeholder="Pesquisar tema" />
                <TouchableOpacity>
                  <Feather name="search" color="#3D3D3D" size={20} />
                </TouchableOpacity>
              </InputBlock>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={scripts}
          keyExtractor={story => String(story.id)}
          contentContainerStyle={{ alignItems: 'center', width: '100%', paddingTop: 20 }}
          renderItem={({ item }) => (
            <ScriptCard
              description={item.description}
              color_theme={item.color_theme}
              image_path={item.image_path}
              tags={item.tags}
              id={item.id}
            />
          )}
        />
      </Container>
  );
}

export default Scripts;