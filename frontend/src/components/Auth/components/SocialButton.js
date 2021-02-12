import React from 'react';
import SocialLogin from 'react-social-login';

import Button from '@material-ui/core/Button';

function SocialButton({ triggerLogin, color, children, rest }) {
  return (
    <Button variant="contained" color={color} fullWidth onClick={triggerLogin} {...rest}>
      {children}
    </Button>
  );
}

export default SocialLogin(SocialButton);
