import React from 'react';
import { UserCardWrapper } from './UserCard.Styled';

const UserCard = (props) => {
	const { user } = props;
	return (
		<UserCardWrapper>
			<p className="user-name">
				{user.name} <span>@{user.username}</span>
			</p>
			<p className="user-catchphrase">{user.company.catchPhrase}</p>
		</UserCardWrapper>
	);
};

export default UserCard;
