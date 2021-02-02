import React from 'react';
import MainContainer from './containers/MainContainer';
import { GlobalStyles } from './theme/globalStyles';

const App = () => {
	return (
		<div className="App">
			<GlobalStyles />
			<MainContainer />
		</div>
	);
};

export default App;
