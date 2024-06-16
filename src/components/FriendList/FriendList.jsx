/* eslint-disable no-mixed-spaces-and-tabs */
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
	return (
	  <div className={css.friendListContainer}>
		 {friends.map((friend) => (
			<FriendListItem
			  key={friend.id}
			  avatar={friend.avatar}
			  name={friend.name}
			  isOnline={friend.isOnline}
			/>
		 ))}
	  </div>
	);
 }