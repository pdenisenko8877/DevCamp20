import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-query';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

import { MainLayout } from 'components/layouts';
import { ArticleForm } from 'components/Articles';
import { createPost } from 'components/Articles/api';

function ArticleCreatePage() {
  const [isCreate, setIsCreate] = useState(false);

  const { mutate: create } = useMutation(createPost, {
    onSuccess: () => {
      setIsCreate(true);
    },
  });

  const onSubmit = useCallback(
    async formData => {
      try {
        return await create(formData);
      } catch (e) {
        console.log(e);
      }
    },
    [create],
  );

  const handleAddNewPost = useCallback(() => {
    setIsCreate(!isCreate);
  }, [isCreate]);

  return (
    <MainLayout>
      {isCreate ? (
        <>
          <Typography variant="h5" component="h3" gutterBottom>
            Your post create!
          </Typography>
          <Typography>Write more!</Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<AddRoundedIcon />}
              onClick={handleAddNewPost}
            >
              Add New
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h5" component="h3" gutterBottom>
            Add Article
          </Typography>
          <Typography paragraph>Write you post here.</Typography>
          <ArticleForm onSubmit={onSubmit} />
        </>
      )}
    </MainLayout>
  );
}

export default ArticleCreatePage;
