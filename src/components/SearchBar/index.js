import React, { useState } from 'react';

const SearchBar = (props) => {
	const { originalUsersList, setUsersList } = props;

	const [inputValue, setInputValue] = useState('');

	const onSearchBarChange = (e) => {
		const text = e.target.value.toLowerCase();

		const list = originalUsersList.filter((user) => user.name.toLowerCase().indexOf(text) >= 0);

		setUsersList(list);

		setInputValue(text);
	};
	return (
		<input value={inputValue} onChange={onSearchBarChange} placeholder="Search user by name" />
	);
};

export default SearchBar;
