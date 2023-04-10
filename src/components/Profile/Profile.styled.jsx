import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
gap: 10px;
margin: 50px auto;

width: 300px;

border-radius: ${({ theme }) => theme.space[3]}px;
box-shadow: -1px -1px 4px #fff, 1px 1px 4px #2a2a2a;

background-color: ${({ theme }) => theme.colors.white};
}
`;

export const Avatar = styled.img`
display: flex;
align-items: center;
justify-content: center;

height: 150px;
width: 150px;

background-color: ${({ theme }) => theme.colors.primaryBackground};
border-radius: 50%;
&:hover {
    background: #ecf0f3;
    box-shadow: inset 3px 3px 5px  #ceced1;
}

:not(:last-child){
    border-right: 1px solid ${({ theme }) => theme.colors.primary}
}
`;

export const Description = styled.div`
display: flex;
flex-direction:column;
align-items: center;
padding: ${({ theme }) => theme.space[5]}px;

gap: 10px;
`;

export const Info = styled.p`
display: flex;
align-item: center;
margin-top: 0;
margin-bottom: ${({ theme }) => theme.space[3]}px;
color: ${({ theme }) => theme.colors.text};
font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const Name = styled(Info)`
color: ${({ theme }) => theme.colors.accent};
font-size: ${({ theme }) => theme.fontSizes.xl};
font-weight: 500;
`;

export const Tag = styled(Info)`
color: ${({ theme }) => theme.colors.text};
`;

export const Location = styled(Info)`
color: ${({ theme }) => theme.colors.text};
`;

export const StatsList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
list-style: none;
margin: 0;
padding: 0;
width: 100%;

background-color: ${({ theme }) => theme.colors.primaryBackground};
border-top: 1px solid ${({ theme }) => theme.colors.primary};
border-bottom-right-radius: ${({ theme }) => theme.space[3]}px; 
border-bottom-left-radius: ${({ theme }) => theme.space[3]}px; 
`;

export const StatsItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: calc((100% - 20px) / 3);
padding: ${({ theme }) => theme.space[4]}px;

&:hover {
    background: #ecf0f3;
    box-shadow: inset 3px 3px 5px  #ceced1;
    border-radius: ${({ theme }) => theme.space[3]}px; 
}

:not(:last-child){
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
}
`;

export const StatsInfo = styled.span`
margin: 0px, 5px;
color: ${({ theme }) => theme.colors.text};
font-size: ${({ theme }) => theme.fontSizes.m};
`;

export const Label = styled(StatsInfo)`
font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
font-weight: 700;
`;