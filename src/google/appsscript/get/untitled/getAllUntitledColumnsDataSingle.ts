import { doGet } from '../../base/doGet.ts';
import type { DataUntitledResponse } from '../../types/types.ts';

import { errorHandler } from 'npm:ameliance-scripts';

export interface GetAllUntitledColumnsDataSingle {
	spreadsheetId: string;
	sheetIndex?: number;
	sheetName?: string;
}

export interface GetAllUntitledColumnsDataSingleResponse {
	status: 'success' | 'error';
	data: DataUntitledResponse;
	info: {
		spreadsheetId: string;
		sheetName?: string;
		sheetIndex?: number;
		type: 'UNTITLED_SINGLE';
		rowCounts: string[];
		columnsCount: number;
	};
	error?: string;
}

export async function getAllUntitledColumnsDataSingle({
	spreadsheetId,
	sheetIndex,
	sheetName,
}: GetAllUntitledColumnsDataSingle): Promise<GetAllUntitledColumnsDataSingleResponse> {
	try {
		const response = await doGet({
			spreadsheetId,
			sheetIndex,
			sheetName,
			type: 'UNTITLED_SINGLE',
		});
		return response as GetAllUntitledColumnsDataSingleResponse;
	} catch (error) {
		const err = errorHandler({ error });
		throw new Error(`${err.code} | ${err.message}`);
	}
}
