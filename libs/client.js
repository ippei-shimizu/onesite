import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ippei-shimizu',
  apiKey: process.env.API_KEY,
});