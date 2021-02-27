import apiClient from 'configs/axios';

export const getPostList = async ({ pageParam = 1 }) => {
  const res = await apiClient.get('/posts?cursor=' + pageParam);
  return res.data
};

export const getPost = async (id) => {
  return apiClient.get(`/posts/${id}`);
};

export const createPost = async (data) => {
  return apiClient.put(`/posts`, data);
};
export const editPost = async (id, data) => {
  return apiClient.put(`/posts/${id}`, data);
};
