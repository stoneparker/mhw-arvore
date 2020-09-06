import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background: ${props => props.color};
`;

export const Cover = styled.Image`
   width: 100%;
   height: 35%;
`;

export const Content = styled.View`
   background: #fff;
   flex: 1;
   border-top-left-radius: 60px;
   border-top-right-radius: 60px;
   padding: 40px;
   align-items: center;
`;