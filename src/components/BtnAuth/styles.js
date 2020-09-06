import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   width: 250px;
   height: 50px;
   background: #0097A7;
   justify-content: center;
   align-items: center;
   border-radius: 15px;
   margin-top: 15px;
`;

export const Content = styled.Text`
   font-family: FredokaOne_400Regular;
   font-size: 20px;
   color: #fff;
`;