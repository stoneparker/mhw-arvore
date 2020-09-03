import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   background-color: ${props => props.color};
   width: 40px;
   height: 40px;
   border-radius: 7px;
   justify-content: center;
   align-items: center;
`;