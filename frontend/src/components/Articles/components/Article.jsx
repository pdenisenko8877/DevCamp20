import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';

import { getPost } from '../api';

function Article() {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(
    () =>
      getPost(id)
        .then(response => {
          // handle success
          setPost(response.data);
        })
        .catch(error => {
          // handle error
          console.log(error);
        }),
    [],
  );

  return (
    <>
      <Typography variant="h4" component="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography color="textSecondary" paragraph>
        {post.intro}
      </Typography>
      <Typography paragraph dangerouslySetInnerHTML={{ __html: post.content }} />
      <Box mt={2}>
        <Button variant="outlined" component={Link} to="/articles" startIcon={<KeyboardBackspaceRoundedIcon />}>
          Back to Post List
        </Button>
      </Box>
    </>
  );
}

export default Article;
