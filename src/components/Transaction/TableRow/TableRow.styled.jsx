import styled from "@emotion/styled";

export const TRow = styled.tr`
background-color: ${props => props.idx % 2 === 0 ? props.theme.colors.white : props.theme.colors.background};
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