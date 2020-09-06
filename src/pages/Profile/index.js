import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

import user from '../../services/user';

import { 
   Container,
   Title,
   InfosContainer,
   InfoBlock,
   Label,
   Subtitle,
   Goal,
   GoalImg,
   GoalDescription,
   GoalCheckbox,
} from './styles';

const Profile = () => {
   
   
   return (
      <Container>
         <Title>Perfil</Title>

         <InfosContainer>
            <InfoBlock>
               <Label>Nome: </Label>
               {user.name}
            </InfoBlock>

            <InfoBlock>
               <Label>Idade: </Label>
               {user.age} anos
            </InfoBlock>

            <InfoBlock>
               <Label>E-mail: </Label>
               {user.email}
            </InfoBlock>
         </InfosContainer>

         <Subtitle>Metas do dia</Subtitle>

         { user.goals.map((item) => {
            const [toggleCheckBox, setToggleCheckBox] = useState(false);

            return (
               <Goal key={item.goal_id} color={item.goal_color}>
                  <GoalImg source={item.goal_icon_path} resizeMode="contain" />
                  <GoalDescription>{item.goal_description}</GoalDescription>
                  <CheckBox 
                     containerStyle={{ margin: 0, padding: 0 }}
                     checkedColor="#fff"
                     uncheckedColor="#fff"
                     size={30}
                     checked={toggleCheckBox}
                     onPress={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                  />
               </Goal>
            )
         })}
      </Container>
   );
}

export default Profile;