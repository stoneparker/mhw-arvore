import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   /* width: 90%; */
   background: #FEC4C0;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
   height: 55px;
`;

export const Label = styled.Text`
   margin: 0 10px;
   font-family: FredokaOne_400Regular;
   color: #2B2B2B;
   flex: 1;
   text-align: center;
   font-size: 17px;
`;

export const IconContainer = styled.View`
   background: #F27C73;
   padding: 10px;
   border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
   height: 100%;
   justify-content: center;
   align-items: center;
`;