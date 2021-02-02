import styled from 'styled-components';

export const UserCardWrapper = styled.li`
	margin-bottom: 20px;
	min-width: 500px;
	margin-left: 20px;
	.user-name {
		font-weight: 600;
		font-size: 20px;
		span {
			color: gray;
			font-size: 15px;
			margin-left: 10px;
		}
	}
	.user-catchphrase {
		margin-top: 5px;
		color: #1d6087;
		font-size: 15px;
		font-style: oblique;
	}
`;