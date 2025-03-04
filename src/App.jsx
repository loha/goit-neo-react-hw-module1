// App.jsx
import React from "react";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="container">
      <h3>Task 1. Social Media Profile</h3>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <h3>Task 2. Friend List</h3>
      <FriendList friends={friends} />

      <h3>Task 3. Transaction History</h3>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
