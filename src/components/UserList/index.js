import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
	const { usersList } = props;

	return (
		<ul>
			{usersList.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</ul>
	);
};

export default UserList;
