import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   background-color: ${props => props.color};
   width: 40px;
   height: 40px;
   border-radius: 7px;
   justify-content: center;
   align-items: center;
`;