import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

const FriendList = ({ friends }) => {
  return (
    <>
      <h1>Friends</h1>
      <ul className={css.friends}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={css.friend}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
