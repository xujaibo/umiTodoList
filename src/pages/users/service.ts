import { request } from 'umi';

//获取用户列表
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
//更新用户
export const editUser = async ({ id, formData }) => {
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
    method: 'put',
    data: formData,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

//新增用户
export const addUser = async ({ formData }) => {
  return request(`http://public-api-v1.aspirantzhang.com/users`, {
    method: 'post',
    data: formData,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};
