import React from 'react';
import { Accordion, AccordionItem } from 'react-accessible-accordion';
import UserCard from './UserCard';
import { UserListWrapper } from './UserList.Styled';

const UserList = (props) => {
	const { usersList } = props;

	return (
		<UserListWrapper>
			<Accordion allowZeroExpanded>
				{usersList.map((user) => (
					<AccordionItem>
						<UserCard key={user.id} user={user} />
					</AccordionItem>
				))}
			</Accordion>
		</UserListWrapper>
	);
};

export default UserList;
