import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';

import { DARK_BG, LIGTH_BG, WHITE } from '~/constants/styles';
import Graph from '~/components/Table/Graph/Graph';

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

const Table = ({ header, data, graphColIds }) => {
	const [tableData, setTableData] = useState(data);
	const [currentSortedRow, setCurrentSortedRow] = useState(0);
	const [sortDirection, setSortDirection] = useState('asc');

	useEffect(() => {
		setTableData(data);
	}, [data]);

	const changeSortDirection = (sortedRow, currentSortDirection) => {
		if (sortedRow === currentSortedRow) {
			return currentSortDirection === 'asc' ? 'desc' : 'asc';
		}
		return 'desc';
	};

	const handleSort = event => {
		const sortedRow = +event.currentTarget.dataset.id;
		const sortBy = changeSortDirection(sortedRow, sortDirection);

		setTableData(orderBy(tableData, sortedRow, sortBy));
		setSortDirection(sortBy);
		setCurrentSortedRow(sortedRow);
	};

	return (
		<StyledTable>
			<tbody>
				<Header>
					{header.map((item, i) => (
						<th key={item.id} data-id={i} onClick={handleSort}>
							{item.title}
						</th>
					))}
				</Header>
				{tableData.map(col => (
					<Row key={col.toString()}>
						{col.map((cell, i) => (
							<td key={cell.toString()}>
								{graphColIds.includes(i) ? <Graph delta={cell} /> : cell}
							</td>
						))}
					</Row>
				))}
			</tbody>
		</StyledTable>
	);
};

Table.propTypes = {
	header: PropTypes.arrayOf(PropTypes.shape({})),
	data: PropTypes.arrayOf(
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
	),
	graphColIds: PropTypes.arrayOf(PropTypes.number),
};

export default React.memo(Table);
