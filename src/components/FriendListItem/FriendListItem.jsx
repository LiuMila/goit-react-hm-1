
import PropTypes from 'prop-types';
import { FriendItem, OnlineStatus, Avatar, Name } from "./FriendListItem.styled"


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <FriendItem>
        <OnlineStatus isOnline={isOnline}></OnlineStatus>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </FriendItem>
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};