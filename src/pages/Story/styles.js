import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   padding: 40px 30px;
`;

export const Text = styled.Text`
   font-family: Nunito_400Regular;
   font-size: 17px;
   color: #4A4A4A;
   margin-bottom: 15px;
`;

export const Illustration = styled.Image`
   width: 100%;
   height: 250px;
   margin-bottom: 30px;
`;

export const NextPageBtn = styled(RectButton)`
   background: #F27C73;
   justify-content: center;
   align-items: center;
   padding: 20px;
   border-radius: 10px;
   margin-bottom: 20px;
`;

export const Pagination = styled.Text`
   font-family: Nunito_400Regular;
`;