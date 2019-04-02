import React, { useState, useEffect } from 'react';
import get from 'lodash/get';

import Table from '~/components/Table/Table';

// fa.fa_data.r – данные таблицы
// fa.fa_data.axis.r – заголовки столбцов (столбцов может быть произвольное количество)
// fDeltaPlan – значение для отображения цветового индикатора.

const App = () => {
	const [header, setHeader] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('./data.json')
			.then(res => res.json())
			.then(res => setHeader(get(res, 'fa.fa_data.axis.r', {})));

		fetch('./data.json')
			.then(res => res.json())
			.then(res => setData(get(res, 'fa.fa_data.r', {})));
	}, []);

	return (
		<>
			<Table header={header} data={data} />
		</>
	);
};

export default React.memo(App);
