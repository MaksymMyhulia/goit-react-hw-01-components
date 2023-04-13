import styled from "@emotion/styled";
import { getRandomHexColor } from "utils/getRandomHexColor";

export const Section = styled.section`
display: flex;
flex-direction: column;

margin: 0 auto;
width: 300px;

border-radius: ${({ theme }) => theme.space[3]}px;
box-shadow: -1px -1px 4px #fff, 1px 1px 4px #2a2a2a;

background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
text-transform: uppercase;
text-align: center;
padding: ${({ theme }) => theme.space[3]}px;
font-size: ${({ theme }) => theme.fontSizes.l};
font-weight: 700;

color: ${({ theme }) => theme.colors.text};
`;

export const StatList = styled.ul`
display: flex;
align-items: center;
padding: 0;
margin: 0;
list-style: none;

border-bottom-right-radius: ${({ theme }) => theme.space[3]}px; 
border-bottom-left-radius: ${({ theme }) => theme.space[3]}px; 
`; 

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: calc((100%) / 5);
padding:${({ theme }) => theme.space[3]}px;


background-color: ${props => getRandomHexColor(props.index)}
`;

export const Label = styled.span`
font-size: 0.8rem;
color: ${({ theme }) => theme.colors.white};
`;

export const Percentage = styled.span`
font-size: 1.2rem;
color: ${({ theme }) => theme.colors.white};
font-weight: 700;
`;

