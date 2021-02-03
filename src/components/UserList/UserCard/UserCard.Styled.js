import styled from 'styled-components';

export const UserCardWrapper = styled.li`
	margin-bottom: 20px;
	margin-left: 20px;

	@media only screen and (min-width: 1024px) {
		min-width: 500px;
	}
	.user-name {
		padding: 10px;
		position: relative;
		font-weight: 600;
		cursor: pointer;
		font-size: 12px;

		transition: opacity 0.15s linear;
		@media only screen and (min-width: 1024px) {
			font-size: 20px;
		}
		&:hover {
			opacity: 0.7;
		}
		span {
			display: block;
			color: gray;
			font-size: 8px;
			margin-left: 5px;

			@media only screen and (min-width: 1024px) {
				font-size: 15px;
				margin-left: 10px;
				display: inline;
			}
		}
		svg {
			position: absolute;
			transform: translateY(-90%);
			top: 50%;
			right: 0;
			width: 15px;
			@media only screen and (min-width: 1024px) {
				transform: translateY(-70%);
			}
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
