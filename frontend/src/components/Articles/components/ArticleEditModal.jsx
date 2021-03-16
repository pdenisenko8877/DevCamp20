import React, { useCallback, memo } from 'react';
import { useMutation } from 'react-query';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal';
import { ArticleForm } from 'components/Articles';
import { editPost } from 'components/Articles/api';

const ArticleEditModal = ({ open, handleClose, initialPostData }) => {
  const { mutate: edit } = useMutation(editPost);

  const onSubmit = useCallback(
    async formData => {
      try {
        return await edit(formData);
      } catch (e) {
        console.log(e);
      }
    },
    [edit],
  );

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Edit Article"
    >
      <ArticleForm onSubmit={onSubmit} initialData={initialPostData} />
    </Modal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  initialPostData: PropTypes.func.isRequired,
};

export default memo(ArticleEditModal);
