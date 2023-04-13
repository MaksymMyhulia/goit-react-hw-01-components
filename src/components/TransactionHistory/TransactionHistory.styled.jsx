import styled from "@emotion/styled";

export const Table = styled.table`
margin: 0 auto;
padding: ${({ theme }) => theme.space[3]}px;
margin-bottom: ${({ theme }) => theme.space[5]}px;

border-radius:${({ theme }) => theme.space[3]}px;
box-shadow: -1px -1px 4px #fff, 1px 1px 4px #2a2a2a;

background-color: #ffff00;

`;

export const TableBody = styled.tbody`
background-color: ${({ theme }) => theme.colors.white};

`;

export const TableHeader = styled.th`
padding: ${({ theme }) => theme.space[4]}px;
text-align: center;

:first-child {
    border-top-left-radius: ${({ theme }) => theme.space[3]}px;
  }
  :last-child {
    border-top-right-radius: ${({ theme }) => theme.space[3]}px;
  }
  `;

export const TRow = styled.tr`
background-color: ${props => props.idx % 2 === 0 ? props.theme.colors.white : props.theme.colors.background};
`;

export const TableHead = styled.thead`
font-size: ${({ theme }) => theme.fontSizes.m}; 
color: ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.blue};
text-transform: uppercase;

border-radius: ${({ theme }) => theme.space[3]}px;
`;

export const TableData = styled.td`
padding: ${({ theme }) => theme.space[3]}px;
border-right: 0.125rem solid #e9edff;
color: ${props => props.theme.colors.text};
text-align: center;

:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  }
`;

export const Type = styled(TableData)`
text-transform: capitelize;
`;

export const Tr = styled.tr`
:hover {
    background-color: #0066cc;
    box-shadow: 0 6px 6px -6px #0E1119;
}
`;


