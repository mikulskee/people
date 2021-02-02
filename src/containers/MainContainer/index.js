import React, { useEffect, useState } from 'react';
import { AppTitle } from '../../components/AppTitle';
import SearchBar from '../../components/SearchBar';
import UserList from '../../components/UserList';
import { MainContainerWrapper } from './MainContainer.Styles';
import Loader from '../../components/Loader';

const MainContainer = () => {
	const [originalUsersList, setOriginalUsersList] = useState([]);
	const [usersList, setUsersList] = useState([]);
	const [fetchUsersError, setFetchUsersError] = useState(null);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => {
				setTimeout(() => {
					setUsersList(json);
					setOriginalUsersList(json);
				}, 300);
			})
			.catch((error) => setFetchUsersError(error));
	}, []);
	return (
		<MainContainerWrapper>
			<AppTitle>Users List</AppTitle>

			{usersList.length ? (
				<>
					<SearchBar originalUsersList={originalUsersList} setUsersList={setUsersList} />
					<UserList usersList={usersList} />
				</>
			) : (
				<Loader />
			)}
		</MainContainerWrapper>
	);
};

export default MainContainer;
