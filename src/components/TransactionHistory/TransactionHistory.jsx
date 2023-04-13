import React from "react";
import PropTypes from "prop-types";
import { 
    Table,
    TableHead,
    TableBody,
    TableHeader,
    TRow,
    Type,
    TableData,
    Tr,

 } from "./TransactionHistory.styled"

export const TransactionHistory = ({ items }) => {
    return (
<Table>
  <TableHead>
    <Tr>
    <TableHeader>Type</TableHeader>
    <TableHeader>Amount</TableHeader>
    <TableHeader>Currency</TableHeader>
    </Tr>
  </TableHead>

  <TableBody>
    {
    items.map((item, idx) => {
    return (
        <TableRow
         key={item.id}
         id={item.id}
         type={item.type}
         currency={item.currency}
         amount={item.amount}
         index={idx}
        />
    );
    })
    }
  </TableBody>
</Table>
    )
};

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currecy: PropTypes.string.isRequired,
}).isRequired
).isRequired
};

const TableRow = ({ type, amount, currency, index }) => {
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