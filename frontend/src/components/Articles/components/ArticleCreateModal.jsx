import React, { memo, useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

import { Modal } from 'components/Modal';
import { ArticleForm } from 'components/Articles';
import { createPost } from 'components/Articles/api';

const ArticleCreateModal = ({ open, handleClose }) => {
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

  const handleCancel = useCallback(() => {
    handleClose();
    setIsCreate(!isCreate);
  }, [isCreate, handleClose]);

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Add Article"
    >
      {isCreate ? (
        <>
          <Typography variant="h6" component="h3" gutterBottom>
            Your post create!
          </Typography>
          <Typography>Write more!</Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Box mr={2}>
              <Button
                variant="outlined"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddRoundedIcon />}
              onClick={handleAddNewPost}
            >
              Add New
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Typography>Write you post here.</Typography>
          <ArticleForm onSubmit={onSubmit} />
        </>
      )}
    </Modal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default memo(ArticleCreateModal);
