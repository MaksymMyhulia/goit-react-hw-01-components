import styled from "@emotion/styled";

export const FriendItem = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
gap: ${({theme}) => theme.space[5]}px;
margin: 0 auto;
padding: ${({theme}) => theme.space[3]}px;

max-width: 100%;
width: 284px;

background-color: ${({theme}) => theme.colors.primaryBackground};
border-radius: ${({theme}) => theme.space[3]}px;
box-shadow: -1px -1px 4px #fff, 1px 1px 4px #2a2a2a;

`;

export const Status = styled.span`
display: block;
width: ${({theme}) => theme.space[4]}px;
height: ${({theme}) => theme.space[4]}px;

margin-left: ${({theme}) => theme.space[3]}px;
border-radius: 50%;
background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
}};

`;

export const Avatar = styled.img`
display: flex;
align-items: center;
justify-content: center;

width: 60px;
height: 60px;

border-radius: ${({theme}) => theme.space[3]}px;
box-shadow: -1px -1px 4px #fff, 1px 1px 4px #2a2a2a;

&:hover {
    background: #ecf0f3;
    box-shadow: inset 3px 3px 5px  #ceced1;
}

`;

export const Name = styled.p`
color: ${({theme}) => theme.colors.text};
font-size: ${({theme}) => theme.fontSizes.m};
font-weight: 700;
`;