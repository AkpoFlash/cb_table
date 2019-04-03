import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GRAPH_BG, GREEN, RED } from '~/constants/styles';

const GraphBar = styled.table`
	width: 100%;

	td {
		&:nth-of-type(1) {
			width: 35%;
		}
		&:nth-of-type(2) {
			width: 20%;
		}
		&:nth-of-type(3) {
			width: 35%;
		}
	}
`;

const StyledGraph = styled.span`
	display: inline-block;
	border-radius: 15px;
	width: 150px;
	background-color: ${GRAPH_BG};
	height: 15px;
	position: relative;

	&::before {
		content: '';
		height: 15px;
		border-radius: 15px;
		left: ${props => (props.delta < 0 ? '100%' : '0')};
		width: ${props => `${(Math.abs(props.delta) / 100) * 150}px`};
		background-color: ${props => (props.delta < 0 ? RED : GREEN)};
		position: absolute;
	}
`;

const Graph = ({ delta }) => (
	<GraphBar>
		<tr>
			<td>{delta < 0 && <StyledGraph delta={delta} />}</td>
			<td>{delta}</td>
			<td>{delta >= 0 && <StyledGraph delta={delta} />}</td>
		</tr>
	</GraphBar>
);

Graph.propTypes = {
	delta: PropTypes.number,
};

export default React.memo(Graph);
