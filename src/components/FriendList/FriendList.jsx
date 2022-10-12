import css from './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    
    return (
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => (
 <li key={id} className={css.item}>
 <span className={isOnline ? (css.green) : (css.red)}></span>
 <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
 <p className={css.name}>{name}</p>
 
</li>
            ))}
</ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
      })
  )}