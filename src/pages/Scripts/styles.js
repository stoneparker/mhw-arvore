import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   padding-top: 10px;
`;

export const Title = styled.Text`
   font-family: FredokaOne_400Regular;
   font-size: 25px;
   color: #404040;
   text-align: center;
   max-width: 80%;
   margin-bottom: 25px;
`;

export const InputBlock = styled.View`
   background: #fff;
   margin-bottom: 25px;
   border-radius: 6px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px 15px;
   elevation: 1;
   width: 80%;
`;

export const Input = styled.TextInput`
   width: 100%;
`;