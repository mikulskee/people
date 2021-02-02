import React, { useEffect, useState } from 'react';
import { AppTitle } from '../../components/AppTitle';
import UserList from '../../components/UserList';
import { MainContainerWrapper } from './MainContainer.Styles';

const MainContainer = () => {
	const [usersList, setUsersList] = useState([]);
	const [fetchUsersError, setFetchUsersError] = useState(null);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => setUsersList(json))
			.catch((error) => setFetchUsersError(error));
	}, []);
	return (
		<MainContainerWrapper>
			<AppTitle>Users List</AppTitle>
			<UserList usersList={usersList} />
		</MainContainerWrapper>
	);
};

export default MainContainer;
