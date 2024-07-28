
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Container } from './App.styled';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </Container>
  );
};

