import React from 'react';
import { AppTitle } from '../../components/AppTitle';
import { MainContainerWrapper } from './MainContainer.Styles';

const MainContainer = () => {
	return (
		<MainContainerWrapper>
			<AppTitle>User List</AppTitle>
		</MainContainerWrapper>
	);
};

export default MainContainer;
