import React from 'react';
import { Link } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getPostList } from '../api';

function ArticleList() {
  const { status, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'posts',
    getPostList,
    {
      getNextPageParam: lastPage => lastPage.nextPage ?? false,
    },
  );

  return (
    <>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.data.map(({ id, title, intro }) => (
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
              ))}
            </React.Fragment>
          ))}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
          </Button>
        </>
      )}
    </>
  );
}

export default ArticleList;
