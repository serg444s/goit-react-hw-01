import css from "./FriendList.module.css";
import friends from "../../data/friendsData.json";
// import clsx from "clsx";

const FriendListItem = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.friend}>
            <img src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            <p className={isOnline ? css.online : css.offline}>
              {isOnline ? "Online" : "Offline"}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const FriendList = () => {
  return (
    <>
      <h1>Friends</h1>
      <FriendListItem friends={friends} />
    </>
  );
};

export default FriendList;
