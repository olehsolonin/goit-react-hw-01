import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendItemCard}>
      <img className={css.friendItemImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendItemName}>{name}</p>
      <p
        className={clsx(
          css.friendItemStatus,
          isOnline && css.isOnline,
          !isOnline && css.isOffline
        )}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}