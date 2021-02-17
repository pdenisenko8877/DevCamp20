import apiClient from 'configs/axios';

export function getPostList() {
  return apiClient.get(`/posts`);
}

export function getPost(id) {
  return apiClient.get(`/posts/${id}`);
}
