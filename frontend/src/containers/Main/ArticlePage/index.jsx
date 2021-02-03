import React from 'react';

import { MainLayout } from 'components/layouts';
import { Article } from 'components/Articles';

function ArticlePage() {
  return (
    <MainLayout>
      <Article />
    </MainLayout>
  );
}

export default ArticlePage;
