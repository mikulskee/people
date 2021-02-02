import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
	const { usersList } = props;

	return (
		<ol>
			{usersList.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</ol>
	);
};

export default UserList;
