import React, {useState} from 'react';

import { MainLayout } from 'components/layouts';
import { ProfileForm } from 'components/Users';

//TODO: Test example API data
const userData = {
  id: 1,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 25,
  avatar: {
    fileId: 1,
    file: {
      id: 1,
      name: 'photo.jpg',
      path: '/upload/photo.jpg',
      size: 1234,
    },
  },
  friends: [{}, {}, {}], //array of users
  articles: [
    {
      title: 'Article 1',
      text: 'Some text',
      images: [{}, {}, {}], // array of files
      createdAt: '2020-12-17 19:00:00',
      editedAt: '2020-12-17 20:00:00',
      likes: [
        { userId: 2, user: { id: 2 }, date: '2020-12-17 21:00:00' },
        { userId: 3, user: { id: 3 }, date: '2020-12-17 22:00:00' },
      ],
    },
  ],
};

function ProfileEditPage() {

  const [username, setUsername] = useState(undefined);

  const handleProfileSubmit = event => {
    event.preventDefault();
    setUsername(`${event.target[0].value} ${event.target[2].value}`);
  };

  return (
    <MainLayout username={username}>
      <ProfileForm handleSubmit={handleProfileSubmit} userData={userData} />
    </MainLayout>
  );
}

export default ProfileEditPage;
