import React from 'react';

import { MainLayout } from 'components/layouts';
import { ArticleForm } from 'components/Articles';

function ArticleCreatePage() {
  return (
    <MainLayout>
      <ArticleForm />
    </MainLayout>
  );
}

export default ArticleCreatePage;
