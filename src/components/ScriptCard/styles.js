import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
   width: 85%;
   height: 140px;
   background: ${props => props.color};
   border-radius: 15px;
   flex-direction: row;
   padding-right: 20px;
   margin-bottom: 20px;
`;

export const ScriptImg = styled.Image`
   width: 140px;
   height: 140px;
`;

export const ScriptInfos = styled.View`
   align-items: center;
   justify-content: center;
   width: 50%;
`;

export const Description = styled.Text`
   text-align: center;
   color: #fff;
   font-size: 20px;
   margin-bottom: 10px;
   font-family: Ubuntu_700Bold;
`;

export const Tags = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const Tag = styled.Text`
   background: ${props => props.color};
   padding: 5px 10px;
   margin: 2px;
   font-size: 12px;
   border-radius: 8px;
   font-family: Ubuntu_400Regular;
`;