/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats: { followers, views, likes }, }) {

return (
	<div className={css.ProfileContainer}>
  		<div className={css.ProfileCard}>
   		 <img className={css.ProfileImg}
      		src= {image}
      		alt="User avatar"
    		/>
    		<p className={css.profileName}>{name}</p>
    		<p>@p{tag}</p>
    		<p>{location}</p>
  		</div>

  	<ul className={css.ProfileStats}>
    		<li className={css.statsItem}>
      	<span>Followers</span>
      		<span>{followers}</span>
    		</li>
    		<li className={css.statsItem}>
      		<span>Views</span>
      		<span>{views}</span>
    		</li>
    		<li className={css.statsItem}>
      		<span>Likes</span>
      		<span>{likes}</span>
    		</li>
  		</ul>
	</div>
  );
}