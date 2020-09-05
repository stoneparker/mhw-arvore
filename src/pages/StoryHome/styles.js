import styled from 'styled-components/native';

export const Title = styled.Text`
   font-family: Ubuntu_700Bold;
   font-size: 25px;
   color: #282828;
   margin-bottom: 6px;
`;

export const Author = styled.Text`
   font-family: Ubuntu_400Regular;
   font-size: 18px;
   color: #9A9A9A;
   margin-bottom: 25px;
`;

export const Preview = styled.Text`
   font-family: Nunito_400Regular;
   font-size: 17px;
   color: #4A4A4A;
   text-align: center;
   margin-bottom: 30px;
`;

export const AgeContainer = styled.View`
   position: absolute;
   top: -22.5px;
   width: 100%;
   flex-direction: row-reverse;
`;

export const AgeContent = styled.View`
   background: #F8B118;
   width: 50px;
   height: 50px;
   border-radius: 30px;
   justify-content: center;
   align-items: center;
   text-align: center;
`;

export const Age = styled.Text`
   font-weight: bold;
   color: #525252;
   font-size: 23px;
`;