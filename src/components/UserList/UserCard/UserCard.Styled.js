import styled from 'styled-components';

export const UserCardWrapper = styled.li`
	margin-bottom: 20px;
	min-width: 500px;
	margin-left: 20px;
	.user-name {
		padding: 10px;
		position: relative;
		font-weight: 600;
		font-size: 20px;
		cursor: pointer;
		transition: opacity 0.15s linear;
		&:hover {
			opacity: 0.7;
		}
		span {
			color: gray;
			font-size: 15px;
			margin-left: 10px;
		}
		svg {
			position: absolute;
			transform: translateY(-5px);
			right: 0;
			width: 15px;
		}
	}

	.company {
		background: #18295a;
		width: fit-content;
		padding: 10px;
		margin-top: 5px;
		border-radius: 4px;
		display: flex;
		transition: opacity 0.25s linear;

		svg {
			width: 20px;
			margin-right: 5px;
		}
		.company-name {
			font-size: 15px;
		}
		.company-catchphrase {
			margin-top: 5px;
			color: #1d6087;
			font-size: 15px;
			font-style: oblique;
		}
	}
`;
