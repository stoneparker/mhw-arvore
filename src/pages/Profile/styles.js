import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   padding: 25px 30px;
`;

export const Title = styled.Text`
   font-family: FredokaOne_400Regular;
   color: #404040;
   font-size: 28px;
   margin-bottom: 25px;
`;

export const InfosContainer = styled.View`
   elevation: 1;
   background: #fff;
   padding: 20px 23px 13px;
   width: 100%;
   border-radius: 15px;
   margin-bottom: 30px;
`;

export const InfoBlock = styled.Text`
   font-size: 17px;
   margin-bottom: 7px;
`;

export const Label = styled.Text`
   font-weight: bold;
`;

export const Subtitle = styled.Text`
   font-family: FredokaOne_400Regular;
   color: #404040;
   font-size: 20px;
   margin-bottom: 25px;
`;

export const Goal = styled.View`
   background: ${props => props.color};
   width: 100%;
   padding: 12px 10px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border-radius: 15px;
   margin-bottom: 20px;
`;

export const GoalImg = styled.Image`
   width: 70px;
   height: 70px;
   left: -15px;
   margin: -10px 0;
`;

export const GoalDescription = styled.Text`
   color: #fff;
   flex: 1;
   font-size: 17px;
`;

export const GoalCheckbox = styled.View`
   width: 20px;
   height: 20px;
   background: #fff;
`;