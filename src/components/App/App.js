import React, { useState, useEffect } from 'react';

import Table from '~/components/Table/Table';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('./data.json').then(response => response.json());
	}, []);

	return (
		<>
			<Table data={data} />
		</>
	);
};

export default React.memo(App);
