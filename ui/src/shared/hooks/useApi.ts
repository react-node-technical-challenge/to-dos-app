import axios from 'axios';
import env from '../constants/env';

export type RequestOptions =
  | {
      body?: never;
      path: string;
      method: 'GET' | 'DELETE';
    }
  | {
      body?: any;
      path: string;
      method: 'POST' | 'PUT' | 'PATCH';
    };

export function useApi() {
  return {
    makeRequest: async <Response = any>(options: RequestOptions) => {
      return axios
        .request<Response>({
          method: options.method,
          url: `${env.apiBaseUrl}${options.path}`,
          data: options.body
        })
        .then(({ data }) => data);
    },
  };
}
