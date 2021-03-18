import React, { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import { ArticleEditModal } from 'components/Articles';
import useModal from 'components/Modal/hook';

import { getPost } from '../api';

function Article() {
  const { id } = useParams();
  const [ openModal, modalProps ] = useModal();

  const { data } = useQuery('post', () => getPost(id));
  const post = data?.data;

  //TODO: Fix undefined data on reload page
  const initialPostData = useCallback( () => {
    if (post) {
      return {
        title: post.title,
        intro: post.intro,
        content: post.content,
      }
    }
    }, [post],
  );

  return post ? (
    <>
      <Box mb={3} display="flex" justifyContent="space-between">
        <Typography variant="h4" component="h3">
          {post.title}
        </Typography>
        <Button onClick={openModal} color="primary" startIcon={<EditOutlinedIcon />}>
          Edit
        </Button>
      </Box>
      <Typography color="textSecondary" paragraph>
        {post.intro}
      </Typography>
      <Typography paragraph dangerouslySetInnerHTML={{ __html: post.content }} />
      <Box mt={2}>
        <Button variant="outlined" component={Link} to="/articles" startIcon={<KeyboardBackspaceRoundedIcon />}>
          Back to Post List
        </Button>
      </Box>
      <ArticleEditModal { ...modalProps } initialPostData={initialPostData()} />
    </>
  ) : (
    <div>Loading....</div>
  );
}

export default Article;
