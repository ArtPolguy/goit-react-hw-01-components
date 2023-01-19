import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

export default FriendList;
