import React, { useCallback } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { MainLayout } from 'components/layouts';
import { ArticleForm } from 'components/Articles';

import { editPost, getPost } from 'components/Articles/api';

function ArticleEditPage() {
  const { id } = useParams();

  const { data } = useQuery('post', () => getPost(id));
  const post = data?.data || [];

  const initialPostData = {
    title: post.title,
    intro: post.intro,
    content: post.content,
  };

  const { mutate: edit } = useMutation(editPost);

  const onSubmit = useCallback(
    async formData => {
      try {
        return await edit(formData);
      } catch (e) {
        console.log(e);
      }
    },
    [edit],
  );

  return (
    <MainLayout>
      <ArticleForm onSubmit={onSubmit} initialData={initialPostData} />
    </MainLayout>
  );
}

export default ArticleEditPage;
