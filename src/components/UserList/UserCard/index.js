import React from 'react';

const UserCard = (props) => {
	const { user } = props;
	return (
		<li>
			<p>{user.name}</p>
			<p>{user.company.catchPhrase}</p>
		</li>
	);
};

export default UserCard;
