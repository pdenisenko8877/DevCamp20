import PropTypes from 'prop-types';

export const userType = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
});

export const fileType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string,
  size: PropTypes.number,
});

export const likeType = PropTypes.shape({
  userId: PropTypes.number,
  user: userType,
  date: PropTypes.string,
});

export const articleType = PropTypes.shape({
  title: PropTypes.string,
  text: PropTypes.string,
  images: PropTypes.arrayOf(fileType),
  createdAt: PropTypes.string,
  editedAt: PropTypes.string,
  likes: PropTypes.arrayOf(likeType),
});
