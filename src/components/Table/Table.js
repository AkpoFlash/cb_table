import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sortBy from 'lodash/sortBy';

import { DARK_BG, LIGTH_BG, WHITE } from '~/constants/styles';

const StyledTable = styled.table`
	width: 100%;
	text-align: center;
	background-color: ${DARK_BG};
	color: ${WHITE};
	font-size: 1.2rem;
`;

const Row = styled.tr`
	height: 50px;

	&:nth-child(2n) {
		background-color: ${LIGTH_BG};
	}
`;

const Header = styled(Row)`
	font-weight: bold;
	cursor: pointer;
`;

const Table = ({ header, data, maxFDeltaPlan }) => {
	const handleSort = event => {
		// todo Готовить все данные в App
		// console.log(sortBy(data, item => item.axis.r[event.currentTarget.dataset.id])[0]);
	};

	return (
		<StyledTable>
			<Header>
				{header.map(item => (
					<th key={item.nAxisID} data-id={item.nAxisID} onClick={handleSort}>
						{item.sAxisName}
					</th>
				))}
			</Header>
			{data.map(item => (
				<Row key={item.axis.r[0].sName_RU + item.axis.r[1].sName_RU}>
					<td>{item.axis.r[0].sName_RU}</td>
					<td>{item.axis.r[1].sName_RU}</td>
					<td>Все валюты</td>
					<td>{Math.round((item.fDeltaPlan / maxFDeltaPlan) * 100)}</td>
				</Row>
			))}
		</StyledTable>
	);
};

Table.propTypes = {
	header: PropTypes.arrayOf(PropTypes.shape({})),
	data: PropTypes.arrayOf(PropTypes.shape({})),
	maxFDeltaPlan: PropTypes.number,
};

export default React.memo(Table);
