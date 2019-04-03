import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import maxBy from 'lodash/maxBy';

import Table from '~/components/Table/Table';

const App = () => {
	const [header, setHeader] = useState([]);
	const [data, setData] = useState([]);

	const getMaxDelta = data =>
		get(maxBy(data, maxDeltaItem => maxDeltaItem.fDeltaPlan), 'fDeltaPlan', 0);
	const calculateDelta = (currentDelta, maxDelta) => Math.round((currentDelta / maxDelta) * 100);

	useEffect(() => {
		fetch('./data.json')
			.then(res => res.json())
			.then(res => get(res, 'fa.fa_data.axis.r', []))
			.then(res =>
				res.map(item => ({
					id: get(item, 'nAxisID', ''),
					title: get(item, 'sAxisName', ''),
				}))
			)
			.then(res => setHeader(res));

		fetch('./data.json')
			.then(res => res.json())
			.then(res => get(res, 'fa.fa_data.r', []))
			.then(res =>
				res.map(item => [
					get(item, 'axis.r[0].sName_RU', ''),
					get(item, 'axis.r[1].sName_RU', ''),
					'Все валюты',
					calculateDelta(item.fDeltaPlan, getMaxDelta(res)),
				])
			)
			.then(res => setData(res));
	}, []);

	return (
		<>
			<Table header={header} data={data} graphColIds={[3]} />
		</>
	);
};

export default React.memo(App);
