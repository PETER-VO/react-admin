import {
	CalendarToday,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	LocationSearching,
	Publish,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
	return (
		<div className='user'>
			<div className='userTitleContainer'>
				<h1 className='userTitle'>Edit User</h1>
				<Link to='/newUser'>
					<button className='userAddButton'>Create</button>
				</Link>
			</div>
			<div className='userContainer'>
				<div className='userShow'>
					<div className='userShowTop'>
						<img
							src='https://robohash.org/3?set=set2&size=180x180'
							alt=''
							className='userShowImg'
						/>
						<div className='userShowTopTitle'>
							<span className='userShowUserName'>Phong Vo</span>
							<span className='userShowUserTitle'>Software Engineer</span>
						</div>
					</div>
					<div className='userShowBottom'>
						<span className='userShowTitle'>Account Details</span>
						<div className='userShowInfo'>
							<PermIdentity className='userShowIcon' />
							<span className='UserShowInfoTitle'>phongvo99</span>
						</div>
						<div className='userShowInfo'>
							<CalendarToday className='userShowIcon' />
							<span className='UserShowInfoTitle'>10.11.1999</span>
						</div>
						<span className='userShowTitle'>Contact Details</span>
						<div className='userShowInfo'>
							<PhoneAndroid className='userShowIcon' />
							<span className='UserShowInfoTitle'>+358 417503310</span>
						</div>
						<div className='userShowInfo'>
							<MailOutline className='userShowIcon' />
							<span className='UserShowInfoTitle'>annabeck99@gmail.com</span>
						</div>
						<div className='userShowInfo'>
							<LocationSearching className='userShowIcon' />
							<span className='UserShowInfoTitle'>Helsinki | Finland</span>
						</div>
					</div>
				</div>
				<div className='userUpdate'>
					<span className='userUpdateTitle'>Edit</span>
					<form action='' className='userUpdateForm'>
						<div className='userUpdateLeft'>
							<div className='userUpdateItem'>
								<label>Username</label>
								<input
									type='text'
									placeholder='phongvo99'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Full Name</label>
								<input
									type='text'
									placeholder='Phong Vo'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Email</label>
								<input
									type='email'
									placeholder='phongvo99@gmail.com'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Phone</label>
								<input
									type='text'
									placeholder='+358 417503313'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Address</label>
								<input
									type='text'
									placeholder='Helsinki | Finland'
									className='userUpdateInput'
								/>
							</div>
						</div>
						<div className='userUpdateRight'>
							<div className='userUpdateUpload'>
								<img
									className='userUpdateImg'
									src='https://robohash.org/3?set=set2&size=180x180'
								/>
								<label htmlFor='file' className='userUpdateIcon'>
									<Publish />
								</label>
								<input type='file' id='file' style={{ display: 'none' }} />
							</div>
							<button className='userUpdateButton'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
