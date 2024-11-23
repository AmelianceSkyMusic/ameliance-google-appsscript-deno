import { doPost } from '../../base/doPost.ts';
import type { DataUntitledResponse } from '../../types/types.ts';

import { errorHandler } from 'npm:ameliance-scripts';

export interface PostUntitledUpdate {
	spreadsheetId: string;
	sheetIndex?: number;
	sheetName?: string;
	col: number;
	row: number;
	value: number | string;
}

export interface PostUntitledUpdateResponse {
	status: 'success' | 'partial' | 'error';
	data: DataUntitledResponse;
	info: {
		spreadsheetId: string;
		sheetName?: string;
		sheetIndex?: number;
		type: 'UNTITLED_UPDATE';
		indexesParams: Record<number, unknown>;
		length: string[];
		columnsCount: number;
	};
	error?: string;
}

export async function postUntitledUpdate({
	spreadsheetId,
	sheetIndex,
	sheetName,
	col,
	row,
	value,
}: PostUntitledUpdate): Promise<PostUntitledUpdateResponse> {
	try {
		const response = await doPost({
			spreadsheetId,
			sheetIndex,
			sheetName,
			col,
			row,
			value,
			type: 'UNTITLED_UPDATE',
		});
		return response as PostUntitledUpdateResponse;
	} catch (error) {
		const err = errorHandler({ error });
		throw new Error(`${err.code} | ${err.message}`);
	}
}
