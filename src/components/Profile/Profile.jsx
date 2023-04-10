import React from "react";
import PropTypes from "prop-types";
import { ProfileContainer,
     Avatar,
      Description,
       Name,
        Tag,
         Location,
          StatsList,
           StatsItem,
            Label,
             Quantity } from "./Profile.styled.jsx";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileContainer>
    <Description> 
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
    </Description>
  
    <StatsList>
        <StatsItem>
        <Label>Followers</Label><Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem> 
        <Label>Views</Label><Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
        <Label>Likes</Label><Quantity>{stats.likes}</Quantity>
        </StatsItem>
   
    </StatsList>
  </ProfileContainer>
    
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired,
}
