import PropTypes from 'prop-types'
import { FriendListItem } from "../FriendListItem/FriendListItem"
import { FriendListContainer } from './FriendList.styled'


export const FriendList = ({ friends }) => {
    return <FriendListContainer>
        {friends.map(({ avatar, name, isOnline, id }) => {
            return <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
            ></FriendListItem>
        })}
    </FriendListContainer>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired)
}
