import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ header, data }) => {
	return (
		<table>
			{header.map(item => (
				<th key={item.nAxisID}>
					<td>{item.sAxisName}</td>
				</th>
			))}
		</table>
	);
};

Table.propTypes = {
	header: PropTypes.arrayOf(PropTypes.shape({})),
	data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default React.memo(Table);
