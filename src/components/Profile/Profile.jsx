/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import css from '../Profile/Profile.module.css';

export default function Profile({name, tag, location, image, stats: { followers, views, likes }, }) {

return (
	<div className='css.ProfileContainer'>
  		<div className='css.ProfileCard'>
   		 <img
      		src= {image}
      		alt="User avatar"
    		/>
    		<p>{name}</p>
    		<p>@p{tag}</p>
    		<p>{location}</p>
  		</div>

  	<ul>
    	<li>
      	<span>Followers</span>
      		<span>{followers}</span>
    		</li>
    		<li>
      		<span>Views</span>
      		<span>{views}</span>
    		</li>
    		<li>
      		<span>Likes</span>
      		<span>{likes}</span>
    		</li>
  		</ul>
	</div>
  );
}