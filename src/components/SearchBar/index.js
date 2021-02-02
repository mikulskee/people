import React, { useState } from 'react';
import { StyledSearchBar } from './SearchBar.Styled';

const SearchBar = (props) => {
	const { originalUsersList, setUsersList } = props;

	const [inputValue, setInputValue] = useState('');

	const onSearchBarChange = (e) => {
		const text = e.target.value;

		const list = originalUsersList.filter(
			(user) => user.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
		);

		setUsersList(list);

		setInputValue(text);
	};
	return (
		<StyledSearchBar
			value={inputValue}
			onChange={onSearchBarChange}
			placeholder="Search user by name"
		/>
	);
};

export default SearchBar;
