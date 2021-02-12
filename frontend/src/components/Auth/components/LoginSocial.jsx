import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SocialButton from 'components/Auth/components/SocialButton';
import { socialAuthConfig } from 'configs/social.auth';
import { auth } from 'components/Auth/api';

function LoginSocial() {
  const handleSocialLogin = user => {
    auth(user.provider, user.token.accessToken)
      .then(response => {
        if (response && response.data) {
          return response.data;
        } else {
          console.log('Unable to authenticate this user.', { variant: 'error' });
        }
      })
      .catch(error => {
        console.log('Authentication failed.', { variant: error });
      });
  };

  const handleSocialLoginFailure = err => {
    console.error(err);
  };

  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>
      {socialAuthConfig.map(authenticator => (
        <Box key={authenticator.provider} mt={2}>
          <SocialButton
            provider={authenticator.provider}
            appId={authenticator.appId}
            color={authenticator.color}
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            {authenticator.text}
          </SocialButton>
        </Box>
      ))}
    </Box>
  );
}

export default LoginSocial;
