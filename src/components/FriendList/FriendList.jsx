/* eslint-disable no-mixed-spaces-and-tabs */
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
	return (
		<div className={css.friendListContainer}>
      	<ul className={css.friendList}>
        	{friends.map(friend => (
          	<li className={css.friendListItem} key={friend.id}>
            	<FriendListItem friend={friend} />
          	</li>
       	 ))}
      	</ul>
    	</div>
	);
 }