import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   padding: 40px 20px;
`;

export const Title = styled.Text`
   font-family: FredokaOne_400Regular;
   font-size: 25px;
   text-align: center;
   color: #2E2E2E;
   margin-bottom: 30px;
`;

export const Logo = styled.Image`
   width: 100px;
   height: 100px;
   margin-bottom: 30px;
`;

export const Card = styled.View`
   width: 95%;
   align-items: center;
   padding: 30px;
   background: #fff;
   border-radius: 24px;
   elevation: 1;
`;