import PropTypes from 'prop-types';

const FriendList = ({ friends, children }) => {
  return <ul className="friend-list">{children}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  children: PropTypes.element.isRequired,
};

export default FriendList;
