export const socialAuthConfig = [
  {
    provider: 'google',
    text: 'Login with Google',
    color: 'secondary',
    appId: process.env.REACT_APP_GOOGLE_APP_ID,
  },
  {
    provider: 'facebook',
    text: 'Login with Facebook',
    color: 'primary',
    appId: process.env.REACT_APP_FACEBOOK_APP_ID,
  },
];
