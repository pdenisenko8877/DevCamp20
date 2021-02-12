import { AxiosPromise } from 'axios';
import apiClient from 'configs/axios';

export function auth(provider, token): AxiosPromise {
  return apiClient.post(`/auth/login/${provider}`, null, {
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
}
