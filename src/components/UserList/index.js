import React from 'react';
import { Accordion, AccordionItem } from 'react-accessible-accordion';
import UserCard from './UserCard';
import { UserListWrapper } from './UserList.Styled';

const UserList = (props) => {
	const { usersList } = props;

	const handleAccordionChange = () => {
		document.querySelectorAll('.company').forEach((item) => (item.style.opacity = 0));
		document
			.querySelectorAll('.company')
			.forEach((item) => setTimeout(() => (item.style.opacity = 1), 100));
	};
	return (
		<UserListWrapper>
			<Accordion allowZeroExpanded onChange={handleAccordionChange}>
				{usersList.map((user) => (
					<AccordionItem key={user.id}>
						<UserCard user={user} />
					</AccordionItem>
				))}
			</Accordion>
		</UserListWrapper>
	);
};

export default UserList;
