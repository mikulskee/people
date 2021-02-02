import React from 'react';
import UserCard from './UserCard';
import { UserListWrapper } from './UserList.Styled';

const UserList = (props) => {
	const { usersList } = props;

	return (
		<UserListWrapper>
			{usersList.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</UserListWrapper>
	);
};

export default UserList;
