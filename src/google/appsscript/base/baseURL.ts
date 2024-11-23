import { config } from '../../../../deps.deno.ts';

const { GOOGLE_APPS_SCRIPT_URL } = config();

export const baseURL = GOOGLE_APPS_SCRIPT_URL;
