import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
   width: 100%;
   height: 120px;
   align-items: center;
   justify-content: space-between;
   background-color: #fff;
   elevation: 1;
   flex-direction: row;
   padding: 0 30px;
   padding-top: ${Constants.statusBarHeight}px;
`;