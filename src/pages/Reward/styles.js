import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
   flex: 1;
   padding: 0 40px 30px;
   padding-top: ${ Constants.statusBarHeight + 50 }px;
   align-items: center;
`;

export const Title = styled.Text`
   font-family: FredokaOne_400Regular;
   font-size: 40px;
   margin-bottom: 15px;
`;

export const Subtitle = styled.Text`
   font-family: Nunito_400Regular;
   font-size: 20px;
   text-align: center;
   margin-bottom: 20px;
`;

export const Text = styled.Text`
   font-family: Nunito_700Bold;
   font-size: 20px;
   margin-bottom: 14px;
`;

export const RewardContainer = styled.View`
   background: #D92626;
   padding: 30px;
   border-radius: 24px;
   align-items: center;
   justify-content: center;
   margin: 0 10px 30px;
`;

export const RewardTitle = styled.Text`
   font-family: Nunito_400Regular;
   font-size: 19px;
   text-align: center;
   color: #fff;
   margin-bottom: 30px;
`;

export const RewardImage = styled.Image`
   width: 150px;
   height: 150px;
`;