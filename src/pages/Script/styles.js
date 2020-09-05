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

export const Illustration = styled.View`
   width: 100%;
   height: 200px;
   background: #B6E7FC;
   margin-bottom: 30px;
`;

export const OptionBtn = styled(RectButton)`
   width: 100%;
   padding: 17px;
   background: #F8B180;
   align-items: center;
   border-radius: 10px;
   margin-bottom: 10px;
`;

export const OptionBtnText = styled.Text`
   font-size: 15px;
   color: #3D3D3D;
   text-align: center;
   font-family: Nunito_400Regular;
`;