import css from "./FriendList.module.css";
// import clsx from "clsx";

const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284,
  },
];

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
