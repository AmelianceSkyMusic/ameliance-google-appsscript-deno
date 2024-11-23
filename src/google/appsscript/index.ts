import { getAllTitledColumnsData } from './get/titled/getAllTitledColumnsData.ts';
import { getAllTitledColumnsDataSingle } from './get/titled/getAllTitledColumnsDataSingle.ts';
import { getTitledColumnsDataByIndexes } from './get/titled/getTitledColumnsDataByIndexes.ts';
import { getTitledColumnsDataByTitles } from './get/titled/getTitledColumnsDataByTitles.ts';
import { getAllUntitledColumnsData } from './get/untitled/getAllUntitledColumnsData.ts';
import { getAllUntitledColumnsDataSingle } from './get/untitled/getAllUntitledColumnsDataSingle.ts';
import { getUntitledColumnsDataByIndexes } from './get/untitled/getUntitledColumnsDataByIndexes.ts';
import { postSingleTitledColumnsDataByIndexes } from './post/titled/postSingleTitledColumnsDataByIndexes.ts';
import { postSingleTitledColumnsDataByTitles } from './post/titled/postSingleTitledColumnsDataByTitles.ts';
import { postTitledColumnsDataByIndexes } from './post/titled/postTitledColumnsDataByIndexes.ts';
import { postTitledColumnsDataByTitles } from './post/titled/postTitledColumnsDataByTitles.ts';
import { postTitledUpdate } from './post/titled/postTitledUpdate.ts';
import { postAllUntitledParamsAsOneRow } from './post/untitled/postAllUntitledParamsAsOneRow.ts';
import { postSingleUntitledColumnsDataByIndexes } from './post/untitled/postSingleUntitledColumnsDataByIndexes.ts';
import { postUntitledColumnsDataByIndexes } from './post/untitled/postUntitledColumnsDataByIndexes.ts';
import { postUntitledUpdate } from './post/untitled/postUntitledUpdate.ts';

export const appsscript = {
	getAllTitledColumnsData,
	getTitledColumnsDataByIndexes,
	getTitledColumnsDataByTitles,

	getAllUntitledColumnsData,
	getUntitledColumnsDataByIndexes,

	postTitledColumnsDataByIndexes,
	postSingleTitledColumnsDataByIndexes,
	postSingleTitledColumnsDataByTitles,
	postTitledColumnsDataByTitles,
	postAllUntitledParamsAsOneRow,
	postSingleUntitledColumnsDataByIndexes,
	postUntitledColumnsDataByIndexes,
	postTitledUpdate,
	postUntitledUpdate,
	getAllTitledColumnsDataSingle,
	getAllUntitledColumnsDataSingle,
};
