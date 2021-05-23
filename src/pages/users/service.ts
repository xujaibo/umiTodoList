import { request } from 'umi';

export const getRemoteList = async () => {
  return request('http://public-api-v1.aspirantzhang.com/users', {
    method: 'get',
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

