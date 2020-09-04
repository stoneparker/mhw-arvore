import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background: #FFDB1D;
`;

export const Cover = styled.View`
   width: 100%;
   height: 35%;
   background: #FFDB1D;
`;

export const Content = styled.View`
   background: #fff;
   flex: 1;
   border-top-left-radius: 60px;
   border-top-right-radius: 60px;
   padding: 40px;
   align-items: center;
`;

export const Synopsis = styled.Text`
   text-align: center;
   /* font-family: Ubuntu_400Regular; */
   font-size: 17px;
   color: #4A4A4A;
   margin-bottom: 30px;
`;

export const Label = styled.Text`
   font-family: Ubuntu_700Bold;
   font-size: 16px;
   color: #2B2B2B;
   margin-bottom: 15px;
`;

export const Input = styled.TextInput`
   border: 1px solid #C8C8C8;
   border-radius: 6px;
   padding: 12px 10px;
   width: 100%;
   font-size: 15px;
   margin-bottom: 30px;
`;