import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getPostList } from '../api';

function ArticleList() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      getPostList()
        .then(response => {
          // handle success
          setPosts(response.data);
        })
        .catch(error => {
          // handle error
          console.log(error);
        }),
    [],
  );

  return posts.length ? (
    posts.map(({ id, title, intro }) => (
      <Box key={id} mb={2}>
        <Paper variant="outlined">
          <Box p={2}>
            <Typography variant="h5" component="h3" gutterBottom>
              <Link to={`/article/${id}`}>{title}</Link>
            </Typography>
            <Typography paragraph>{intro}</Typography>
            <Box mt={1} display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary" component={Link} to={`/article/${id}`}>
                Read More
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    ))
  ) : (
    <Typography variant="h6" gutterBottom>
      Empty Posts List
    </Typography>
  );
}

export default ArticleList;
