import styled from "@emotion/styled";

export const FriendsList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
list-style: none;
gap: ${({theme}) => theme.space[4]}px;
margin: 50px auto;
padding: 0;
margin-bottom: ${({theme}) => theme.space[5]}px;

`;