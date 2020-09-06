import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
   /* padding: 40px 0px 40px; */
   margin: -10px;
   margin-top: 20px;
   flex: 1;
`;

export const MainCardsContainer = styled.View`
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 50px;
   padding: 0 30px;
`;

export const MainCard = styled(RectButton)`
   width: 47%;
   height: 200px;
   border-radius: 15px;
   background: ${props => props.color};
   justify-content: space-between;
`;

export const MainCard1Img = styled.Image`
   width: 110px;
   height: 110px;
   transform: scaleX(-1);
   position: relative;
   top: -20px;
   left: -20px;
`;

export const MainCard2Img = styled.Image`
   width: 130px;
   height: 130px;
   transform: scaleX(-1);
   position: relative;
   top: 10px;
   right: -30px;
`;

export const MainCardTitle = styled.Text`
   font-family: FredokaOne_400Regular;
   font-size: 25px;
   color: #fff;
   margin: 14px;
   margin-bottom: 16px !important;
`;

export const SessionTitle = styled.Text`
   font-family: FredokaOne_400Regular;
   font-size: 25px;
   color: #404040;
   margin-bottom: 20px;
   margin-left: 30px;
`;