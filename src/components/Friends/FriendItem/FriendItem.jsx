import React from "react";
import PropTypes from "prop-types";
import { FriendItem, Status, Avatar, Name } from "./FriendItem.styled";

export const FriendItemEl = ({ avatar, name, isOnline }) => {
    return (
        <FriendItem>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
        </FriendItem>
    )
}

FriendItemEl.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

