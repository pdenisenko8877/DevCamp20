import apiClient from 'configs/axios';

export const getPostList = async () => {
  return apiClient.get(`/posts`);
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
