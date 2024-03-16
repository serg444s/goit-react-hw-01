import "./App.css";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import userData from "../../data/userData.json";
import friendsData from "../../data/friendsData.json";
import transactions from "../../data/transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
