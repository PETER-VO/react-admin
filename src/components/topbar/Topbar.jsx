import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
	return (
		<div>
			<div className='topbar'>
				<div className='topbarWrapper'>
					<div className='topLeft'>
						<span className='logo'>Admin</span>
					</div>
					<div className='topRight'>
						<div className='topbarIconContainer'>
							<NotificationsNone />
							<span className='topIconBadge'>2</span>
						</div>
						<div className='topbarIconContainer'>
							<Language />
							<span className='topIconBadge'>2</span>
						</div>
						<div className='topbarIconContainer'>
							<Settings />
						</div>
						<img
							src='https://user-images.githubusercontent.com/61008063/132121444-fd06db3b-cdb4-46bf-88b0-d21b4157f954.jpg'
							alt=''
							className='topAvatar'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
