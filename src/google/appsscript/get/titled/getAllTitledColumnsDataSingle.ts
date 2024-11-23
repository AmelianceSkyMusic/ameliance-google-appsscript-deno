import { doGet } from '../../base/doGet.ts';
import type { DataTitledResponse } from '../../types/types.ts';

import { errorHandler } from 'npm:ameliance-scripts';

export interface GetAllTitledColumnsDataSingle {
	spreadsheetId: string;
	sheetIndex?: number;
	sheetName?: string;
}

export interface GetAllTitledColumnsDataSingleResponse {
	status: 'success' | 'error';
	data: DataTitledResponse;
	info: {
		spreadsheetId: string;
		sheetName?: string;
		sheetIndex?: number;
		type: 'TITLED_SINGLE';
		titles: string[];
		rowsCount: number;
		columnsCount: number;
	};
	error?: string;
}

export async function getAllTitledColumnsDataSingle({
	spreadsheetId,
	sheetIndex,
	sheetName,
}: GetAllTitledColumnsDataSingle): Promise<
	GetAllTitledColumnsDataSingleResponse
> {
	try {
		const response = await doGet({
			spreadsheetId,
			sheetIndex,
			sheetName,
			type: 'TITLED_SINGLE',
		});
		return response as GetAllTitledColumnsDataSingleResponse;
	} catch (error) {
		const err = errorHandler({ error });
		throw new Error(`${err.code} | ${err.message}`);
	}
}
