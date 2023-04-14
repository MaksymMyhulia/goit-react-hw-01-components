import React from "react";
import PropTypes from "prop-types";
import { TRow, Type, TableData } from "./TableRow.styled";


export const TableRow = ({ type, amount, currency, index }) => {
    return (
    <TRow idx ={index}>
    <Type>{type}</Type>
    <TableData>{amount}</TableData>
    <TableData>{currency}</TableData>
    </TRow>
    )
};

TableRow.propTypes = {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};