import { useState } from 'react';

const useModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const props = {
    open,
    handleClose
  };
  return [openModal, props];
};
export default useModal;
