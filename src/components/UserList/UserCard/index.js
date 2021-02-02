import React from 'react';
import { UserCardWrapper } from './UserCard.Styled';
import { ReactComponent as CompanyIcon } from '../../../assets/icons/building-solid.svg';
import {
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import { ReactComponent as SortDownIcon } from '../../../assets/icons/sort-down-solid.svg';

const UserCard = (props) => {
	const { user } = props;
	return (
		<UserCardWrapper>
			<AccordionItemHeading>
				<AccordionItemButton>
					<p className="user-name">
						{user.name} <span>@{user.username}</span> <SortDownIcon />
					</p>
				</AccordionItemButton>
			</AccordionItemHeading>
			<AccordionItemPanel>
				<div className="company">
					<CompanyIcon />
					<div>
						<p className="company-name">{user.company.name}</p>
						<p className="company-catchphrase">{user.company.catchPhrase}</p>
					</div>
				</div>
			</AccordionItemPanel>
		</UserCardWrapper>
	);
};

export default UserCard;
