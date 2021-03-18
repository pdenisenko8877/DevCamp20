import { createStyles } from '@material-ui/core/styles';

import { colorGrey } from 'styles/variables';

export default () =>
  createStyles({
    modalTitle: {
      position: 'relative',
    },
    modalCloseButton: {
      position: 'absolute',
      right: 3,
      top: 3,
      padding: 8,
      color: colorGrey,

      '& svg': {
        fontSize: 20,
      },
    },
  });
