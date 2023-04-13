import React from "react";
import PropTypes from "prop-types";
import { FriendsList } from "./FriendsList.styled";
import { FriendItemEl } from "../FriendItem/FriendItem";

export const FriendList = ({ friends }) => {
return (
    <FriendsList>
        {
           friends.map((friend) => (
            
                <FriendItemEl
                  key={friend.id}
                  id={friend.id}
                  avatar={friend.avatar}
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
           )
           )
        }
    </FriendsList>
)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,).isRequired
}