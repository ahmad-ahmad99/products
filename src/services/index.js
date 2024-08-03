import {useQuery} from 'react-query';
import axiosInstanceAxios from './axiosInstance';

export const useGitListService = (url) => {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await axiosInstanceAxios.get(url);
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      return response.data;
    },
  });
};
