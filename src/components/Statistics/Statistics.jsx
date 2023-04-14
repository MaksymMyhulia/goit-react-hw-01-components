import React from "react";
import PropTypes from "prop-types";
import {Section, Title, StatList, StatItem, Label, Percentage} from "./Statistics.styled";

export const Statistics = ({ stats, title }) => {
    return (
<Section>
{title && <Title>{title}</Title>}
<StatList>
{stats.map((item, index) => (
    <StatItem key={item.id} index={index}>
    <Label>{item.label}</Label>
    <Percentage>{item.percentage}%</Percentage>
 </StatItem>
))}
</StatList>
</Section>
)}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired
}