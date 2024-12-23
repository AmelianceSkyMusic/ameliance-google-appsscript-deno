import { doPost } from '../../base/doPost.ts';
import type { DataUntitledResponse } from '../../types/types.ts';

import { errorHandler } from 'npm:ameliance-scripts';

export interface PostAllUntitledParamsAsOneRow {
	spreadsheetId: string;
	sheetIndex?: number;
	sheetName?: string;
	indexesParams: Record<number, unknown>;
}

export interface PostAllUntitledParamsAsOneRowResponse {
	status: 'success' | 'error';
	data: DataUntitledResponse;
	info: {
		spreadsheetId: string;
		sheetName?: string;
		sheetIndex?: number;
		type: 'UNTITLED_ONE_ROW';
		indexesParams: Record<number, unknown>;
		length: string[];
		columnsCount: number;
	};
	error?: string;
}

export async function postAllUntitledParamsAsOneRow({
	spreadsheetId,
	sheetIndex,
	sheetName,
	indexesParams,
}: PostAllUntitledParamsAsOneRow): Promise<
	PostAllUntitledParamsAsOneRowResponse
> {
	try {
		const response = await doPost({
			spreadsheetId,
			sheetIndex,
			sheetName,
			indexesParams,
			type: 'UNTITLED_ONE_ROW',
		});
		return response as PostAllUntitledParamsAsOneRowResponse;
	} catch (error) {
		const err = errorHandler({ error });
		throw new Error(`${err.code} | ${err.message}`);
	}
}
