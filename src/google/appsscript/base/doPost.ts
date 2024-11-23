import type { DoPost, Response } from '../types/types.ts';
import { baseURL } from './baseURL.ts';

import { errorHandler } from 'npm:ameliance-scripts';

export async function doPost({
	spreadsheetId,
	sheetName,
	sheetIndex,
	titlesParams,
	indexesParams,
	type,
	col,
	row,
	value,
}: DoPost): Promise<Response> {
	const URLParams = new URLSearchParams();
	if (spreadsheetId) URLParams.append('spreadsheetId', spreadsheetId);
	if (sheetName) URLParams.append('sheetName', sheetName);
	if (sheetIndex) URLParams.append('sheetIndex', sheetIndex.toString());
	if (titlesParams) {
		URLParams.append('titlesParams', JSON.stringify(titlesParams));
	}
	if (indexesParams) {
		URLParams.append('indexesParams', JSON.stringify(indexesParams));
	}
	if (type) URLParams.append('type', type);
	if (col) URLParams.append('col', col.toString());
	if (row) URLParams.append('row', row.toString());
	if (value) URLParams.append('value', value.toString());

	try {
		const response = await fetch(`${baseURL}?${URLParams}`, { method: 'POST' });
		const textData = await response.text();
		const data = await JSON.parse(textData);
		if (data.status !== 'success') throw new Error(data.error);
		return data;
	} catch (error) {
		const err = errorHandler({ error });
		throw new Error(`${err.code} | ${err.message}`);
	}
}
