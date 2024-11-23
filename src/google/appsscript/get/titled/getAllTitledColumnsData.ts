import { doGet } from '../../base/doGet.ts';
import type { DataTitledResponse } from '../../types/types.ts';

import { errorHandler } from 'npm:ameliance-scripts';

export interface GetAllTitledColumnsData {
	spreadsheetId: string;
	sheetIndex?: number;
	sheetName?: string;
}

export interface GetAllTitledColumnsDataResponse {
	status: 'success' | 'error';
	data: DataTitledResponse;
	info: {
		spreadsheetId: string;
		sheetName?: string;
		sheetIndex?: number;
		type: 'TITLED';
		titles: string[];
		rowsCount: number;
		columnsCount: number;
	};
	error?: string;
}

export async function getAllTitledColumnsData({
	spreadsheetId,
	sheetIndex,
	sheetName,
}: GetAllTitledColumnsData): Promise<GetAllTitledColumnsDataResponse> {
	try {
		const response = await doGet({
			spreadsheetId,
			sheetIndex,
			sheetName,
			type: 'TITLED',
		});
		return response as GetAllTitledColumnsDataResponse;
	} catch (error) {
		const err = errorHandler({ error });
		throw new Error(`${err.code} | ${err.message}`);
	}
}
