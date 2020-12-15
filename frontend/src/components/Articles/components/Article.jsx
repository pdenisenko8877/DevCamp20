import React from 'react';

import Typography from '@material-ui/core/Typography';

function Article() {
  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>
        Article
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae libero non nibh sollicitudin ullamcorper
        vulputate et arcu. Vestibulum rhoncus tellus in tristique placerat. Sed dapibus sollicitudin turpis, in
        sollicitudin enim gravida eu. Aenean vulputate porttitor euismod. Aliquam accumsan convallis iaculis.{' '}
      </Typography>
    </>
  );
}

export default Article;
