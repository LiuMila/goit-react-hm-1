import PropTypes from 'prop-types'
import { UserCard, UserDescription, Avatar, UserName, CardDescription, StateList, StateItem, Label, Quantity } from './Profile.styled'


export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats}) => {
    return <UserCard>
  <CardDescription key={username}>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserDescription>@{tag}</UserDescription>
    <UserDescription>{location}</UserDescription>
  </CardDescription>

  <StateList>
    <StateItem>
      <Label>Followers: </Label>
      <Quantity>{stats.followers}</Quantity>
    </StateItem>
    <StateItem>
      <Label>Views: </Label>
      <Quantity>{stats.views}</Quantity>
    </StateItem>
    <StateItem>
      <Label>Likes: </Label>
      <Quantity>{stats.likes}</Quantity>
    </StateItem>
  </StateList>
</UserCard>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired
}

