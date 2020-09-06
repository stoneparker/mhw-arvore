import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
   activeOpacity: 0.8
})`
   width: 50%;
   border-radius: 19px;
   padding: 10px;
`;

export const Header = styled.View`
   width: 100%;
   height: 100px;
   background: ${props => props.color};
   border-top-left-radius: 19px;
   border-top-right-radius: 19px;
   flex-direction: column-reverse;
`;

export const Illustration = styled.Image`
   width: 110px;
   height: 110px;
   position: absolute;
   left: -6px;
`;

export const Infos = styled.View`
   padding: 12px;
   border-bottom-left-radius: 19px;
   border-bottom-right-radius: 19px;
   background: #fff;
`;

export const Title = styled.Text`
   font-size: 15px;
   color: #282828;
`;

export const Author = styled.Text`
   font-size: 13px;
   color: #9A9A9A;
`;

export const AgeContainer = styled.View`
   width: 40px;
   height: 40px;
   background: #F8B118;
   position: absolute;
   border-radius: 20px;
   bottom: -5px;
   right: -5px;
   justify-content: center;
   align-items: center;
`;

export const Age = styled.Text`
   font-weight: bold;
   font-size: 20px;
   color: #525252;
`;

export const Options = styled.TouchableOpacity`
   flex: 1;
   flex-direction: row-reverse;
`;

export const OptionsText = styled.Text`
   margin-right: 13px;
   margin-top: -4px;
   font-size: 20px;
`;

export const Stars = styled.View`
   margin-top: 7px;
   flex-direction: row;
   align-items: center;
`;

export const StarsText = styled.Text`
   font-size: 12px;
`;

export const BtnDraft = styled.View`
   background: #DD4211;
   padding: 3px 5px;
   border-radius: 4px;
`;

export const BtnDraftText = styled.Text`
   font-size: 12px;
   color: #fff;
`;